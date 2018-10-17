<template>
	<div class="about">
		<headBox>
			<Breadcrumb slot="left">
				<BreadcrumbItem>Home</BreadcrumbItem>
				<BreadcrumbItem>Components</BreadcrumbItem>
				<BreadcrumbItem>Layout</BreadcrumbItem>
			</Breadcrumb>
			<div slot="right">
				<fontBtn font-class='icon-add' font-text='新添' @action='add'></fontBtn>
				<fontBtn font-class='edit' font-text='修改' @action='edit'></fontBtn>
				<fontBtn font-class='delete' font-text='删除' @action='add'></fontBtn>
			</div>
		</headBox>
		<div class="continer">
			<div class="box">
				画江湖656
				<Button type="info" @click="change01">Info</Button>
    		<Button type="success" @click="change02">Success</Button>
				<div style="height: 20px"></div>
				<!-- <Table width="" height="617" border :columns="columns2" :data="data4"></Table> -->
			</div>认为ererererererer

		</div>
		<footer>
			hahh
		</footer>
	</div>
</template>
<script>
	import {aa,bb} from '../api/testApi/request.js'
export default {
	data() {
		return {
			headBox:"",
			columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
      data4: [
          {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },
          {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },{
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },
          {
              name: 'Jim Green',
              age: 24,
              address: 'Washington, D.C. No. 1 Lake Park',
              province: 'America',
              city: 'Washington, D.C.',
              zip: 100000
          },
          {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              province: 'Australian',
              city: 'Sydney',
              zip: 100000
          },
          {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              province: 'Canada',
              city: 'Ottawa',
              zip: 100000
          },
          {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
          },
          {
              name: 'Jim Green',
              age: 24,
              address: 'Washington, D.C. No. 1 Lake Park',
              province: 'America',
              city: 'Washington, D.C.',
              zip: 100000
          },
          {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              province: 'Australian',
              city: 'Sydney',
              zip: 100000
          },
          {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              province: 'Canada',
              city: 'Ottawa',
              zip: 100000
          }
      ]
		}
	},

	methods: {
		change01(){
			this.axios.post('test01/change01').then(res => {
				console.log(res)
				this.$msgBox('success','请求成功01')
			})
		},
		change02(){
			this.axios.get('test02/table').then(res => {
				console.log(res,'table')
				this.$msgBox('success','请求成功02')
			})
		},
		add() {
			// console.log(aa,bb)
			this.axios.get('test02/table').then(res => {
				console.log(res)
			})
		},

		edit() {

		}
	}
}
</script>
<style scoped>
.continer{
	/*height: 658px;*/
	height: calc(100vh - 140px);
	border: 1px solid #471515;
	/*overflow: auto;*/
}
.demo-carousel {
	height: 200px;
	line-height: 200px;
	text-align: center;
	color: #fff;
	font-size: 20px;
	background: #506b9e;
}

.box {
	/*height: 800px;*/
	border: 1px solid red;
	text-align: center;
}
footer{
	height: 60px;
	background-color: #592C2C;
}
</style>