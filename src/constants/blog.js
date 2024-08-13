export const BUTTON_TEXT = "BLOG";
export const TITLE = "LLM Safety Leaderboard <br /> In Industrial Sectors";
export const SUBTITLE = "Virtue AI hosts a comprehensive LLM safety leaderboard for existing foundation models, providing the most up-to-date unified evaluation platform.";

export const columns1 = [
    { field: "id", headerName: "模型", width: 130 },
    { field: "field1", headerName: "电子设备制造", width: 100 },
    { field: "field2", headerName: "装备制造", width: 100 },
    { field: "field3", headerName: "钢铁", width: 100 },
    { field: "field4", headerName: "采矿", width: 100 },
    { field: "field5", headerName: "电力", width: 100 },
    { field: "field6", headerName: "石化化工", width: 100 },
    { field: "field7", headerName: "建材", width: 100 },
    { field: "field8", headerName: "纺织", width: 100 },
    { field: "field9", headerName: "平均", width: 100 },
];

export const columns2 = [
    { field: "id", headerName: "模型", width: 130 },
    { field: "field1", headerName: "客观准确度", width: 112.5 },
    { field: "field2", headerName: "主观准确度", width: 112.5 },
    { field: "field3", headerName: "语句能力", width: 112.5 },
    { field: "field4", headerName: "概括能力", width: 112.5 },
    { field: "field5", headerName: "逻辑能力", width: 112.5 },
    { field: "field6", headerName: "自我认知能力", width: 112.5 },
    { field: "field7", headerName: "污染分析能力", width: 112.5 },
    { field: "field8", headerName: "平均", width: 112.5 },
];

export const rowsData1 = {
        title: "行业维度下准确性测评结果",
        rows: [
            { id: "GPT4", field1: "76.8", field2: "71.9", field3: "62.3", field4: "62.2", field5: "49.7", field6: "65.8", field7: "52.2", field8: "57.7", field9: "62.3"},
            { id: "GPT3.5", field1: "62.9", field2: "52.4", field3: "57.7", field4: "50.8", field5: "52.6", field6: "55.2", field7: "50.5", field8: "47.3", field9: "53.7"},
            { id: "文心一言", field1: "69.5", field2: "65.8", field3: "66.9", field4: "53.6", field5: "64.0", field6: "58.1", field7: "56.4", field8: "49.3", field9: "61.7"},
            { id: "ChatGLM", field1: "62.2", field2: "54.9", field3: "56.6", field4: "44.7", field5: "56.3", field6: "50.4", field7: "51.8", field8: "50.8", field9: "53.6"},
            { id: "360智脑", field1: "59.9", field2: "60.3", field3: "47.3", field4: "50.3", field5: "43.8", field6: "54.0", field7: "49.7", field8: "48.8", field9: "51.7"},
            { id: "天工大模型", field1: "55.5", field2: "53.9", field3: "50.6", field4: "44.2", field5: "54.6", field6: "51.4", field7: "44.4", field8: "45.6", field9: "50.9"},
            { id: "星火大模型", field1: "56.4", field2: "53.6", field3: "51.3", field4: "47.4", field5: "48.2", field6: "38.8", field7: "54.6", field8: "47.7", field9: "49.8"},
            { id: "商汤大模型", field1: "52.4", field2: "51.6", field3: "49.3", field4: "46.1", field5: "48.4", field6: "53.1", field7: "42.7", field8: "45.5", field9: "48.6"},
            { id: "从容大模型", field1: "51.6", field2: "53.1", field3: "51.2", field4: "45.2", field5: "43.9", field6: "53.4", field7: "45.9", field8: "43.7", field9: "48.5"},
            { id: "通义千问", field1: "42.8", field2: "42.4", field3: "36.6", field4: "39.2", field5: "39.9", field6: "36.2", field7: "42.5", field8: "39.3", field9: "39.3"},
        ],
    }

export const rowsData2 = {
    title: "能力维度下准确性测评结果",
    rows: [
        { id: "GPT4", field1: "56.9", field2: "69.8", field3: "76.8", field4: "76.2", field5: "75.1", field6: "12.9", field7: "90", field8: "65.4"},
        { id: "GPT3.5", field1: "56.2", field2: "61.6", field3: "75.3", field4: "68.2", field5: "68.9", field6: "0.73", field7: "20", field8: "50.1"},
        { id: "文心一言", field1: "48.1", field2: "63.8", field3: "74.9", field4: "70.2", field5: "70.4", field6: "1.48", field7: "10", field8: "48.4"},
        { id: "ChatGLM", field1: "47.5", field2: "68.4", field3: "74.4", field4: "68.2", field5: "67.6", field6: "5.4", field7: "0", field8: "47.4"},
        { id: "360智脑", field1: "47.1", field2: "56.9", field3: "74.4", field4: "68.2", field5: "67.6", field6: "5.4", field7: "0", field8: "43.7"},
        { id: "天工大模型", field1: "44.3", field2: "61.8", field3: "73.1", field4: "65.4", field5: "62.9", field6: "0.2", field7: "0", field8: "44.2"},
        { id: "星火大模型", field1: "44.3", field2: "58.7", field3: "71.1", field4: "65.1", field5: "64", field6: "0.7", field7: "0", field8: "43.41"},
        { id: "商汤大模型", field1: "43.7", field2: "59.1", field3: "70.7", field4: "62.7", field5: "63.1", field6: "0.1", field7: "0", field8: "42.8"},
        { id: "从容大模型", field1: "43.0", field2: "55.6", field3: "68.2", field4: "61.3", field5: "58.9", field6: "0", field7: "0", field8: "41"},
        { id: "通义千问", field1: "32.6", field2: "57.8", field3: "72.4", field4: "64.7", field5: "61.8", field6: "0.5", field7: "0", field8: "41.4"},
    ],
}

export const rowsData3 = {
    title: "行业维度下稳定性测评结果",
    rows: [
        { id: "GPT3.5", field1: "89", field2: "80", field3: "81", field4: "81", field5: "80", field6: "81", field7: "78", field8: "79", field9: "81"},
        { id: "GPT4", field1: "92", field2: "84", field3: "82", field4: "82", field5: "81", field6: "84", field7: "80", field8: "80", field9: "83"},
        { id: "通义千问", field1: "62", field2: "74", field3: "73", field4: "62", field5: "63", field6: "64", field7: "63", field8: "67", field9: "66"},
        { id: "文心一言", field1: "68", field2: "63", field3: "69", field4: "63", field5: "62", field6: "72", field7: "66", field8: "63", field9: "66"},
        { id: "ChatGLM", field1: "63", field2: "75", field3: "62", field4: "76", field5: "64", field6: "67", field7: "68", field8: "68", field9: "68"},
        { id: "星火认知大模型", field1: "67", field2: "71", field3: "76", field4: "75", field5: "76", field6: "68", field7: "79", field8: "75", field9: "73"},
        { id: "MinMax", field1: "61", field2: "53", field3: "42", field4: "51", field5: "38", field6: "60", field7: "66", field8: "47", field9: "52"},
        { id: "天工大模型", field1: "55", field2: "83", field3: "81", field4: "75", field5: "61", field6: "72", field7: "60", field8: "74", field9: "70"},
        { id: "云从大模型", field1: "69", field2: "63", field3: "69", field4: "59", field5: "68", field6: "67", field7: "66", field8: "63", field9: "66"},
        { id: "360智脑", field1: "74", field2: "74", field3: "69", field4: "71", field5: "69", field6: "76", field7: "68", field8: "74", field9: "72"},
    ],
}

export const rowsData4 = {
    title: "能力维度下稳定性测评结果",
    rows: [
        { id: "GPT3.5", field1: "94.2", field2: "76.9", field3: "83.7", field4: "88.1", field5: "83.3", field6: "84.7", field7: "90.2", field8: "83.2", field9: "85.5"},
        { id: "GPT4", field1: "95.7", field2: "78.7", field3: "86.3", field4: "89.2", field5: "86.7", field6: "87.3", field7: "91.8", field8: "85.9", field9: "87.7"},
        { id: "通义千问", field1: "96.9", field2: "45.6", field3: "45.5", field4: "86.5", field5: "91.7", field6: "82.5", field7: "88.6", field8: "75.7", field9: "76.6"},
        { id: "文心一言", field1: "84.1", field2: "56", field3: "64.7", field4: "73.6", field5: "63.6", field6: "74.2", field7: "79.8", field8: "62.2", field9: "69.8"},
        { id: "星火认知大模型", field1: "88.1", field2: "61.4", field3: "68.5", field4: "79.8", field5: "73.6", field6: "79.6", field7: "86.8", field8: "76.3", field9: "76.8"},
        { id: "MinMax", field1: "68.4", field2: "50", field3: "70.6", field4: "45.5", field5: "50", field6: "58.4", field7: "60.7", field8: "46.2", field9: "56.2"},
        { id: "天工大模型", field1: "78.7", field2: "64.2", field3: "70", field4: "66.7", field5: "33.3", field6: "80", field7: "76.7", field8: "78.8", field9: "68.5"},
        { id: "云从大模型", field1: "90.2", field2: "53.3", field3: "47.3", field4: "84.5", field5: "80", field6: "78", field7: "84.5", field8: "69.4", field9: "73.4"},
        { id: "360智脑", field1: "87.3", field2: "64.7", field3: "65.4", field4: "77", field5: "68.8", field6: "83.4", field7: "82.5", field8: "70.8", field9: "75"},
    ],
};