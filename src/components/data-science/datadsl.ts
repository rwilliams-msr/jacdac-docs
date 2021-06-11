import { 
    BlockDefinition, 
    CategoryDefinition,
    OptionsInputDefinition 
} from "../blockly/toolbox"
import BlockDomainSpecificLanguage from "../blockly/dsl/dsl"

const colour = "#123456"
export class DataScienceBlockDomainSpecificLanguage
    implements BlockDomainSpecificLanguage
{
    id = "dataScience"
    createBlocks() {
        const blocks: BlockDefinition[] = [
            {
                kind: "block",
                type: "ds_tbl_mtcars",
                message0: "mtcars",
                args0: [],
                inputsInline: true,
                nextStatement: null,
                colour,
            } as BlockDefinition,
            {
                kind: "block",
                type: "ds_tbl_trees",
                message0: "trees",
                args0: [],
                inputsInline: true,
                nextStatement: null,
                colour,
            } as BlockDefinition,
            {
                kind: "block",
                type: "ds_tbl_col",
                message0: "Column: %1",
                args0: [
                    <OptionsInputDefinition>{
                        type: "field_dropdown",
                        name: "COLUMN",
                        options: [
                            ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
                            ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
                            ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
                            ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
                        ],
                    },
                ],
                inputsInline: true,
                output: "Number",
                colour,
            } as BlockDefinition,
            {
                kind: "block",
                type: "ds_wr_arrange",
                message0: "arrange",
                args0: [],
                inputsInline: true,
                previousStatement: null,
                nextStatement: null,
                colour,
            } as BlockDefinition,
            {
                kind: "block",
                type: "ds_wr_filter",
                message0: "filter",
                args0: [],
                inputsInline: true,
                previousStatement: null,
                nextStatement: null,
                colour,
            } as BlockDefinition,
            {
                kind: "block",
                type: "ds_lg_compare",
                message0: "Placeholder",
                args0: [
                   
                ],
                inputsInline: true,
                output: "Number",
                colour,
            } as BlockDefinition,
        ]
        return blocks
    }

    createCategory() {
        return [
            <CategoryDefinition>{
                kind: "category",
                name: "Datasets",
                colour,
                contents: [
                    {
                        kind: "block",
                        type: "ds_tbl_mtcars",
                    },
                    {
                        kind: "block",
                        type: "ds_tbl_trees",
                    },
                    {
                        kind: "block",
                        type: "ds_tbl_col",
                    },
                ],
            },
            <CategoryDefinition>{
                kind: "category",
                name: "Wrangle",
                colour,
                contents: [
                    {
                        kind: "block",
                        type: "ds_wr_filter",
                    },
                ],
            },
            <CategoryDefinition>{
                kind: "category",
                name: "Logic",
                colour,
                contents: [
                    {
                        kind: "block",
                        type: "ds_lg_compare",
                    },
                ],
            },
        ]
    }
}

const dataDsl = new DataScienceBlockDomainSpecificLanguage()
export default dataDsl
