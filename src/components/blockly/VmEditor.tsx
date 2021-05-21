import React, { useContext, useRef, useState } from "react"
import ReactBlockly from "react-blockly"
import Blockly from "blockly"
import Theme from "@blockly/theme-modern"
import { DisableTopBlocks } from "@blockly/disable-top-blocks"
/*
import {
    ContinuousToolbox,
    ContinuousFlyout,
    ContinuousMetrics,
} from "@blockly/continuous-toolbox"
*/
import useToolbox, {
    DECLARE_ROLE_CALLBACK_KEY,
    scanServices,
} from "./useToolbox"
import AppContext from "../AppContext"

export default function VmEditor(props: {
    className?: string
    initialXml?: string
    onXmlChange?: (xml: string) => void
}) {
    const { className, onXmlChange, initialXml } = props
    const { toggleShowDeviceHostsDialog } = useContext(AppContext)
    const [services, setServices] = useState<string[]>([])
    const {
        toolboxBlocks,
        toolboxCategories,
        initialXml: defaultInitialXml,
    } = useToolbox(services)
    // ReactBlockly
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reactBlockly = useRef<any>()
    const workspaceReady = useRef(false)

    const resolveWorkspace = (): Blockly.WorkspaceSvg =>
        reactBlockly.current?.workspace?.state?.workspace

    const initWorkspace = () => {
        if (workspaceReady.current) return
        const workspace = resolveWorkspace()
        if (!workspace) return
        workspaceReady.current = true
        // Add the disableOrphans event handler. This is not done automatically by
        // the plugin and should be handled by your application.
        workspace.addChangeListener(Blockly.Events.disableOrphans)

        // The plugin must be initialized before it has any effect.
        const disableTopBlocksPlugin = new DisableTopBlocks()
        disableTopBlocksPlugin.init()

        // buttons
        workspace.registerButtonCallback(
            DECLARE_ROLE_CALLBACK_KEY,
            function () {
                toggleShowDeviceHostsDialog()
            }
        )
    }

    const handleChange = (workspace: Blockly.WorkspaceSvg) => {
        initWorkspace()

        const newXml = Blockly.Xml.domToText(
            Blockly.Xml.workspaceToDom(workspace)
        )
        onXmlChange?.(newXml)

        // update toolbox with declared roles
        const allBlocks = workspace.getAllBlocks(false)
        const newServices = scanServices(allBlocks)
        if (JSON.stringify(services) !== JSON.stringify(newServices))
            setServices(newServices)
    }

    return (
        <ReactBlockly
            ref={reactBlockly}
            toolboxBlocks={toolboxBlocks}
            toolboxCategories={toolboxCategories}
            workspaceConfiguration={{
                comments: false,
                css: true,
                trash: false,
                grid: {
                    spacing: 25,
                    length: 1,
                    colour: "#ccc",
                    snap: true,
                },
                renderer: "zelos",
                theme: Theme,
                oneBasedIndex: false,
                move: {
                    scrollbars: {
                        vertical: false,
                        horizontal: true,
                    },
                },
            }}
            initialXml={initialXml || defaultInitialXml}
            wrapperDivClassName={className}
            workspaceDidChange={handleChange}
        />
    )
}
