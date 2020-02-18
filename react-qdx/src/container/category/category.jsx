import React, { Component } from 'react'
import {connect} from 'react-redux'
//引入antd
import {Card,Button,Icon,Table,Modal,Form,Input,message} from 'antd'
//引入请求分类列表
import {createGetCategoryAsynAction} from '../../redux/actions/category'
import {PAGE_SIZE} from '../../config/index'
//引入AIP 
import {reqAddCategory,reqUpdateCategory} from '../../api/index'


const {Item} = Form


@connect(
    (state)=>({categoryList:state.categoryList}),//映射状态
    {getCategory:createGetCategoryAsynAction}//映射操作状态的方法
)
@Form.create()
class Category extends Component {

    state = { visible : false}

    //组件挂载  在redux中获取数据
    componentDidMount(){
       /*  //请求商品信息分类
        let result = await reqCategory()
        //将商品分类信息存到redux
        console.log(result) */
        //分发一个获取商品分类信息的action
        this.props.getCategory()
    }
    

    	//用于展示弹窗
    showModal = (categoryObj) => {
        //尝试获取当前商品的name和_id 注意新增的时候不会获取到name _id
        const {name ,_id} = categoryObj
        if (name && _id) {
            this.isUpdate = true
            this.name = name
            this._id = _id
        }else{
            this.isUpdate=false
            this.name = ''
            this._id = ''
        }
        this.setState({visible: true}); //展示弹窗
    };

    	//确定按钮的回调
    handleOk = () => {
        this.props.form.validateFields(async(err,values) => {
            if (!err) {
                let result
                //新增
                if (!this.isUpdate) result =await reqAddCategory(values.categoryName)
                //修改
                else result =await reqUpdateCategory(this._id,values.categoryName)
                const {status,msg}= result
                if (status ===0) {
                    message.success('添加商品分类成功')
                    this.props.getCategory()//重新获取所有分类
                    this.props.form.resetFields() //重置form表单
                    this.setState({visible: false}); //隐藏弹窗
                }else{
                    message.error(msg)
                }
            }
        });
        
    };

//取消按钮的回调
handleCancel = () => {
    this.props.form.resetFields() //重置form表单
    this.setState({visible: false}); //隐藏弹窗
    
};

    render() {
        const { getFieldDecorator } = this.props.form;

        //数据  不需要了
        /* const dataSource = [
            {
                key: '1',
                name: '测试分类1',
            },
            {
                key: '2',
                name: '测试分类2',
            },
            {
                key: '3',
                name: '测试分类3',
            },
        ]; */
    

        //列
        const columns = [
            {
                title: '分类',
                //数据索引 与数据里的name对应
                dataIndex: 'name',
                key: 'name',
                width:"75%",
            },
            {
                title: '操作',
                // dataIndex: 'age',
                key: 'age',
                width:"25%",
                align:"center",
                //当前列如果不是单纯的展示数据,而是返回一些按钮、超链接等结构的东西,要写render属性
                //reder属性的值是一个函数,该函数返回的东西展示在该数据中
                render:(categoryObj)=>(<Button type="link" onClick={()=>{this.showModal(categoryObj)}}>修改分类</Button>),
                
            },
        ];
        return (
            <div>
                <Card 
                    extra={
                        <Button type="primary" onClick={this.showModal}>
                            <Icon type="plus-circle"/>添加
                        </Button>}
                >
                    <Table 
                        dataSource={this.props.categoryList} //表格数据
                        columns={columns}  //列
                        bordered   //布尔值  true可以省略
                        pagination={{pageSize:PAGE_SIZE}}
                        rowKey="_id"

                    />
                </Card>
                
                {/* 弹窗 */}
                <Modal
                    title={this.isUpdate ? "修改分类" : "添加分类"}   //弹窗的标题
                    visible={this.state.visible}//弹窗是否显示
                    onOk={this.handleOk} // 确认按钮的回调
                    onCancel={this.handleCancel}  //取消按钮的回调
                    okText ="确定"
                    cancelText="取消"
                >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {getFieldDecorator('categoryName', {
                                rules: [{ required: true, message: '分类名必须输入!'}],
                                initialValue:this.name ? this.name : ''
                            })(<Input placeholder="请输入分类名" />)
                            }
                        </Item>
                        
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Category