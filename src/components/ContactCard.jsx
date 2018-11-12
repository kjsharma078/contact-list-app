import React,{Component} from 'react';
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import '../Contacts.css';

class ContactCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selected: {}, selectAll: 0, data: this.props.contact, deleteIndex:[]};
		this.toggleRow = this.toggleRow.bind(this);
	}

	// var deleteIndex = new Array();
	toggleRow(name) {
		const newSelected = Object.assign({}, this.state.selected);
		newSelected[name] = !this.state.selected[name];
		this.setState({
			selected: newSelected,
			selectAll: 2
		});
		
	}

	toggleSelectAll() {
		let newSelected = {};

		if (this.state.selectAll === 0) {
			this.state.data.forEach(x => {
				newSelected[x.name] = true;
			});
		}

		this.setState({
			selected: newSelected,
			selectAll: this.state.selectAll === 0 ? 1 : 0
		});
	}

	deleteData(){
		var oldData=[...this.state.data];
		var index = '';
		oldData.forEach(x => {
			if(this.state.selected[x.name] === true){
				var index = this.state.data.findIndex(y => y.name==x.name);
				oldData.splice(index,1);
			}
		});
		console.log(oldData);
		this.setState={
			data:oldData
		}
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (this.state.data !== this.props.contact) {
		  this.setState ({data:this.props.contact});
		}
	}



  render() {
		console.log(this.state.data);
		const columns = [
			{
				Header: "Name",
				columns: [
					{
						id: "checkbox",
						accessor: "",
						Cell: ({ original }) => {
							return (
								<input
									type="checkbox"
									className="checkbox"
									checked={this.state.selected[original.name] === true}
									onChange={() => this.toggleRow(original.name)}
									name  = {original.name}
								/>
							);
						},
						Header: x => {
							return (
								<input
									type="checkbox"
									className="checkbox"
									checked={this.state.selectAll === 1}
									ref={input => {
										if (input) {
											input.indeterminate = this.state.selectAll === 2;
										}
									}}
									onChange={() => this.toggleSelectAll()}
								/>
							);
						},
						sortable: false,
						width: 45
					},
					{
						Header: "Name",
						accessor: "name"
					},
					{
						Header: "Age",
						accessor:"age"
					},
					{
						Header: "Phone",
						accessor:"phone"		
					},
					{
						Header: "Category",
						accessor:"category"
					}
				]
			}
		];

		return (
			<div>
				<button  className="-btn" onClick={()=>this.deleteData()}> Delete </button>	
				<ReactTable
					data={this.state.data}
					columns={columns}
					defaultSorted={[{ id: "name", desc: false }]}
					defaultPageSize='10'
				/>
			</div>
		);
	}
}
// const ContactCard = (props) => {

// const data = props.contact;
// 	return(
// 		<div>
// 		{<ReactTable
// 		  data={data}
// 		  columns={[
// 			{
// 			  columns: [
// 				{
					
// 				  Header: "Name",
// 				  accessor: "name"
// 				},
// 				{
// 				  Header: "Age",
// 				  accessor: "age"
// 				},
// 				{
// 					Header:"Phone",
// 					accessor:"phone"
// 				},
// 				{
// 					Header:"Category",
// 					accessor:"category"
// 				}
// 			  ]
// 			}
// 		  ]}
// 		  defaultPageSize={data.length}
// 		  className="-striped -highlight"
// 		/> }
// 	  </div>

//      )
// }


// class ContactCard extends Component {
// 	constructor() {
// 	  super();
// 	  this.state = {
// 		data: [
// 			{name:'Krishna',age:'29',phone:'9997899896',category:'Family'},
// 			{name:'Ramesh',age:'32',phone:'9127899896',category:'Friends'},
// 			{name:'Avdehsh',age:'28',phone:'9811424256',category:'Friends'},
// 			{name:'Ram',age:'25',phone:'9911424256',category:'Family'}
// 		  ]
// 	  };
// 	}
// 	render() {
// 	  const { data } = this.state;
// 	  console.log(this.props.contact,'ttttt');
// 	  return (
// 		<div>
			
// 		  {<ReactTable
// 			data={data}
// 			columns={[
// 			  {
// 				columns: [
// 				  {
// 					Header: "Name",
// 					accessor: "name"
// 				  },
// 				  {
// 					Header: "Age",
// 					accessor: "age"
// 				  },
// 				  {
// 					  Header:"Phone",
// 					  accessor:"phone"
// 				  },
// 				  {
// 					  Header:"Category",
// 					  accessor:"category"
// 				  }
// 				]
// 			  }
// 			]}
// 			defaultPageSize={10}
// 			className="-striped -highlight"
// 		  /> }
// 		</div>
// 	  );
// 	}
// }
export default ContactCard;