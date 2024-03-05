<template>
    <div class="container" style="display: flex;justify-content: center;">
        <div>
            <div style="line-height: 32px;margin-top: 24px;">管理用户</div>
            <div style="width: 1280px;margin-top: 12px;">
                <t-table
                ref="tableRef"
                row-key="key"
                :data="data"
                :columns="columns"
                :editable-row-keys="editableRowKeys"
                :pagination="pagination"
                table-layout="fixed"

                bordered
                resizable
                lazy-load
                @row-edit="onRowEdit"
                @row-validate="onRowValidate"
                @validate="onValidate"
                >
                </t-table>
            </div>
        </div>
    </div>
</template>

<script lang="jsx">
import { MessagePlugin,Input, Select, DatePicker } from 'tdesign-vue-next';
import { ref,computed} from 'vue';

export default {
    name: 'UserManage',
    setup() {
        const editableRowKeys = ref([]);
        const tableRef = ref();
        const currentSaveId = ref();
        const editMap = {};
        const MARRY_OPTIONS=[
            { label: '已婚', value: '已婚' },
            { label: '未婚', value: '未婚' },
            { label: '单身', value: '单身' },
        ];

        const GENDER_OPTIONS=[
            { label: '男', value: '男' },
            { label: '女', value: '女' },
        ];

        const columns = computed(() =>[
            { align: 'left', colKey: 'username', title: '用户名', width: '120', fixed: 'left',
                // 编辑状态相关配置，全部集中在 edit
                edit: {
                    // 1. 支持任意组件。需保证组件包含 `value` 和 `onChange` 两个属性，且 onChange 的第一个参数值为 new value。
                    // 2. 如果希望支持校验，组件还需包含 `status` 和 `tips` 属性。具体 API 含义参考 Input 组件
                    component: Input,
                    // props, 透传全部属性到 Input 组件
                    props: {
                        clearable: true,
                        autofocus: true,
                        autoWidth: true,
                    },
                    // 校验规则，此处同 Form 表单
                    rules: [
                        { required: true, message: '不能为空' },
                        { max: 10, message: '字符数量不能超过 10', type: 'warning' },
                    ],
                    showEditIcon: false,
                },
            },

            { colKey: 'password', title: '密码', width: '170' ,
                edit: {
                        // 1. 支持任意组件。需保证组件包含 `value` 和 `onChange` 两个属性，且 onChange 的第一个参数值为 new value。
                        // 2. 如果希望支持校验，组件还需包含 `status` 和 `tips` 属性。具体 API 含义参考 Input 组件
                        component: Input,
                        // props, 透传全部属性到 Input 组件
                        props: {
                            clearable: true,
                            autofocus: true,
                            autoWidth: true,
                            type:'password'
                        },
                        // 校验规则，此处同 Form 表单
                        rules: [
                            { required: true, message: '不能为空' },
                            { max: 10, message: '字符数量不能超过 10', type: 'warning' },
                        ],
                        showEditIcon: false,
                    },
             },
            { colKey: 'icon', title: '头像', width: '120' },
            { colKey: 'sex', title: '性别', width: '100',
            edit: {
                component: Select,
                // props, 透传全部属性到 Select 组件
                props: {
                clearable: true,
                autoWidth: true,
                options: GENDER_OPTIONS,
                },
                // 校验规则，此处同 Form 表单
                rules: [{ required: true, message: '不能为空' }],
                showEditIcon: false,
                on: ({ updateEditedCellValue }) => ({
                onChange: () => {
                    /**
                     * change other columns edited cell value
                     * 更新本行其他编辑态单元格的数据(to update editedRow)
                     */
                    updateEditedCellValue({
                    isUpdateCurrentRow: true,
                    letters: [],
                    // 'user.firstName': '',
                    // createTime: dayjs().add(1, 'day').toDate(),
                    });
                    /**
                     * update edited row data with row unique value is qual to 2
                     * 更新行唯一标识值为 2 的编辑态数据
                     */
                    // updateEditedCellValue({ rowValue: 2, letters: [] });
                },
                }),
            },
             },
            { colKey: 'maritalStatus', title: '婚姻状态', width: '180', ellipsis: true ,
            edit: {
                component: Select,
                // props, 透传全部属性到 Select 组件
                props: {
                clearable: true,
                autoWidth: true,
                options: MARRY_OPTIONS,
                },
                showEditIcon: false,
                on: ({ updateEditedCellValue }) => ({
                onChange: () => {
                    /**
                     * change other columns edited cell value
                     * 更新本行其他编辑态单元格的数据(to update editedRow)
                     */
                    updateEditedCellValue({
                    isUpdateCurrentRow: true,
                    letters: [],
                    // 'user.firstName': '',
                    // createTime: dayjs().add(1, 'day').toDate(),
                    });
                    /**
                     * update edited row data with row unique value is qual to 2
                     * 更新行唯一标识值为 2 的编辑态数据
                     */
                    // updateEditedCellValue({ rowValue: 2, letters: [] });
                },
                }),
            }
            },
            { colKey: 'birthDate', title: '出生年月' ,width:'220px',
                edit: {
                    component: DatePicker,
                    // props, 透传全部属性到 DatePicker 组件
                    props: { allowInput: true ,},
                    showEditIcon: false,
                },
            },
            { colKey: 'email', title: '电子邮箱地址', width: '180', ellipsis: true,
                edit: {
                    // 1. 支持任意组件。需保证组件包含 `value` 和 `onChange` 两个属性，且 onChange 的第一个参数值为 new value。
                    // 2. 如果希望支持校验，组件还需包含 `status` 和 `tips` 属性。具体 API 含义参考 Input 组件
                    component: Input,
                    // props, 透传全部属性到 Input 组件
                    props: {
                        clearable: true,
                        autofocus: true,
                        autoWidth: true,
                    },
                    showEditIcon: false,
                },
            },
            { colKey: 'tel', title: '电话号码', width: '180', ellipsis: true,
                edit: {
                        // 1. 支持任意组件。需保证组件包含 `value` 和 `onChange` 两个属性，且 onChange 的第一个参数值为 new value。
                        // 2. 如果希望支持校验，组件还需包含 `status` 和 `tips` 属性。具体 API 含义参考 Input 组件
                        component: Input,
                        // props, 透传全部属性到 Input 组件
                        props: {
                            clearable: true,
                            autofocus: true,
                            autoWidth: true,
                            type:'tel'
                        },
                        showEditIcon: false,
                },
            },
            { colKey: 'address', title: '详细地址', width: '180', ellipsis: true,
                edit: {
                        // 1. 支持任意组件。需保证组件包含 `value` 和 `onChange` 两个属性，且 onChange 的第一个参数值为 new value。
                        // 2. 如果希望支持校验，组件还需包含 `status` 和 `tips` 属性。具体 API 含义参考 Input 组件
                        component: Input,
                        // props, 透传全部属性到 Input 组件
                        props: {
                            clearable: true,
                            autofocus: true,
                            autoWidth: true,
                        },
                        showEditIcon: false,
                },
            },
            { colKey: 'statement', title: '个人简介', width: '180', ellipsis: true ,
                edit: {
                    // 1. 支持任意组件。需保证组件包含 `value` 和 `onChange` 两个属性，且 onChange 的第一个参数值为 new value。
                    // 2. 如果希望支持校验，组件还需包含 `status` 和 `tips` 属性。具体 API 含义参考 Input 组件
                    component: Input,
                    // props, 透传全部属性到 Input 组件
                    props: {
                        clearable: true,
                        autofocus: true,
                        autoWidth: true,
                    },
                    showEditIcon: false,
                },
            },
            {
                colKey: 'operation',
                title: '操作',
                cell: (h, { row }) => {
                    // console.log('row_key:',row.key);
                    const editable = editableRowKeys.value.includes(row.key);
                    return (
                    <t-space class="table-operations">
                        {!editable && (
                        <t-link theme="primary" hover="color" data-id={row.key} onClick={onEdit}>
                            编辑
                        </t-link>
                        )}
                        {editable && (
                        <t-link theme="primary" hover="color" data-id={row.key} onClick={onSave}>
                            保存
                        </t-link>
                        )}
                        {editable && (
                        <t-link theme="primary" hover="color" data-id={row.key} onClick={onCancel}>
                            取消
                        </t-link>
                        )}
                        {(
                        <t-popconfirm content="确认删除吗">
                            <t-link theme="primary" hover="color" data-id={row.key} onClick={onDelete}>
                                删除
                            </t-link>
                        </t-popconfirm>
                        )}
                    </t-space>
                    );
                },
                width: 150,
                fixed: 'right'
            },
        ])
        const initialData= [
            {
                key: '1',
                username: '贾明',
                password: '624978165',
                sex: '男',
                maritalStatus: '宣传物料制作费用',
                birthDate: '2022-01-01',
                email: 'w.cezkdudy@lhll.au',
                tel: '471923654912',
                address: '扭矩输出v的女',
                statement: '警方次哦安居房不好弄青蛙',
            },
            {
                key: '2',
                username: '贾明2',
                password: '624978165',
                sex: '男',
                maritalStatus: '宣传物料制作费用',
                birthDate: '2022-01-01',
                email: 'w.cezkdudy@lhll.au',
                tel: '471923654912',
                address: '扭矩输出v的女',
                statement: '警方次哦安居房不好弄青蛙',
            },
            {
                key: '3',
                username: '贾明3',
                password: '624978165',
                sex: '男',
                maritalStatus: '宣传物料制作费用',
                birthDate: '2022-01-01',
                email: 'w.cezkdudy@lhll.au',
                tel: '471923654912',
                address: '扭矩输出v的女',
                statement: '警方次哦安居房不好弄青蛙',
            },
            {
                key: '4',
                username: '贾明4',
                password: '624978165',
                sex: '男',
                maritalStatus: '宣传物料制作费用',
                birthDate: '2022-01-01',
                email: 'w.cezkdudy@lhll.au',
                tel: '471923654912',
                address: '扭矩输出v的女',
                statement: '警方次哦安居房不好弄青蛙',
            },
            {
                key: '5',
                username: '贾明5',
                password: '624978165',
                sex: '男',
                maritalStatus: '宣传物料制作费用',
                birthDate: '2022-01-01',
                email: 'w.cezkdudy@lhll.au',
                tel: '471923654912',
                address: '扭矩输出v的女',
                statement: '警方次哦安居房不好弄青蛙',
            },
            {
                key: '6',
                username: '贾明6',
                password: '624978165',
                sex: '男',
                maritalStatus: '宣传物料制作费用',
                birthDate: '2022-01-01',
                email: 'w.cezkdudy@lhll.au',
                tel: '471923654912',
                address: '扭矩输出v的女',
                statement: '警方次哦安居房不好弄青蛙',
            },
        ];


        // const realData = new Array(initialData.length).fill(null).map((_, i) => ({
        //     console.log(i);
        // }));

        const realData = new Array(1).fill(initialData).flat();
        // const realData = new Array(initialData.length)
        // for(var i = 0;i<initialData.length;i++){
        //     const realData = new Array(initialData.length).fill(null).
        // }


        // console.log(realData);

        const data = ref([...realData]);

        const onRowEdit = (params) => {
            console.log('onrowedit',params);
            const { row, col, value } = params;
            const oldRowData = editMap[row.key]?.editedRow || row;
            const editedRow = { ...oldRowData, [col.colKey]: value };
            editMap[row.key] = {
                ...params,
                editedRow,
            };

            // ⚠️ 重要：以下内容应用于全量数据校验（单独的行校验不需要）
            // const newData = [...data.value];
            // newData[rowIndex] = editedRow;
            // data.value = newData;
        };

        const pagination = {
            defaultCurrent: 1,
            defaultPageSize: 5,
            total: data.value.length
        }

        const onDelete = (e) =>{
            onCancel(e)
            const { id } = e.currentTarget.dataset;
            console.log("delete",id);
        }

        const onEdit = (e) => {
            // Your onEdit logic...
            // console.log('onEdit:',e);
            const { id } = e.currentTarget.dataset;
            // console.log('onEdit_id:',id);
            // console.log('!editableRowKeys.value.includes(id):',!editableRowKeys.value.includes(id));
            if (!editableRowKeys.value.includes(id)) {
                editableRowKeys.value.push(id);
                console.log(editableRowKeys.value);
            }
        };

        const onCancel = (e) => {
            // Your onCancel logic...
            const { id } = e.currentTarget.dataset;
            updateEditState(id);
            tableRef.value.clearValidateData();
        };

        const updateEditState = (id) => {
            // Your updateEditState logic...
            const index = editableRowKeys.value.findIndex((t) => t === id);
            editableRowKeys.value.splice(index, 1);
        };

        const onSave = (e) => {
            // Your onSave logic...
            const { id } = e.currentTarget.dataset;
            currentSaveId.value = id;
            // 触发内部校验，而后也可在 onRowValidate 中接收异步校验结果
            tableRef.value.validateRowData(id).then((params) => {
                console.log('Event Table Promise Validate:', params);
                if (params.result.length) {
                    // const r = params.result[0];
                    MessagePlugin.error('error');
                    return;
                }
                // 如果是 table 的父组件主动触发校验
                if (params.trigger === 'parent' && !params.result.length) {
                    const current = editMap[currentSaveId.value];
                    if (current) {
                        data.value.splice(current.rowIndex, 1, current.editedRow);
                        // data[current.rowIndex]=current.editedRow
                        console.log('save:current',current);
                        console.log('data:',data);
                        MessagePlugin.success('保存成功');
                    }
                    updateEditState(currentSaveId.value);
                }
            });
        };

        // 行校验反馈事件，tableRef.value.validateRowData 执行结束后触发
        const onRowValidate = (params) => {
            console.log('Event Table Row Validate:', params);
        };

        // 表格全量数据校验反馈事件，tableRef.value.validateTableData() 执行结束后触发
        function onValidate(params) {
            console.log('Event Table Data Validate:', params);
        }



        return {
            editableRowKeys,
            columns,
            data,
            tableRef,
            currentSaveId,
            editMap,
            onEdit,
            onCancel,
            updateEditState,
            onSave,
            onRowEdit,
            pagination,
            onRowValidate,
            onValidate,
            onDelete
        };
    },
}
</script>

<style scoped>
.container{
    width: 100%;
    height: calc(100vh - 74px);
    background-color: white;
}

</style>