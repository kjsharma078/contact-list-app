import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ContactCard from '../components/ContactCard';
import '../Contacts.css';
import AddContact from './AddContact';
import userList from '../userdata';

console.log(userList);
//const contactsAPI = 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';
		
class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactList:[
        {name:'Krishna',age:'29',phone:'9997899896',category:'Family'},
        {name:'Ramesh',age:'32',phone:'9127899896',category:'Friends'},
        {name:'Avdehsh',age:'28',phone:'9811424256',category:'Friends'},
        {name:'Ram',age:'25',phone:'9911424256',category:'Family'}
      ]
    }

    this.handleNewContact = this.handleNewContact.bind(this);
    //this.handleSearch = this.handleSearch.bind(this);
    this.returnContactList = this.returnContactList.bind(this);
  }
// var obj = {};
// obj.name='popopo';
// obj.age='12';
// contactList.push(obj)
// console.log(contactList);

  // handleSearch(searchText) {
   
  //   this.setState({searchResult: [], searchText: searchText});
  //   this.state.contactList.map(contact => {

  //     if(searchContact(contact, searchText)) {
  //        this.setState( prevState => ({
  //          searchResult: [...prevState.searchResult, contact]
  //        }), () => console.log(this.state.searchResult))
  //     }
  //   })
  // }

  // componentWillMount() {
  //    this.setState = {
  //     contactList:{
  //       1:{name:'Krishna',age:'29',phone:'9997899896',category:'Family'},
  //       2:{name:'Ramesh',age:'32',phone:'9127899896',category:'Friends'},
  //       3:{name:'Avdehsh',age:'28',phone:'9811424256',category:'Friends'},
  //       4:{name:'Ram',age:'25',phone:'9911424256',category:'Family'}
  //     }
  //    }

  //   }

  returnContactList() {
   return this.state.contactList
  }



  handleNewContact(newContact) {
  	this.setState( prevState => ({
  		contactList: [
  			...prevState.contactList, newContact ]
  		}), () => console.log(this.state.contactList))
  }
  render() {

    return (
    	<div>
         	<AddContact onSubmit= {this.handleNewContact} />
         	<br />
              <ContactCard contact = {this.state.contactList}/>
        </div>
    );
  }
}

const searchContact = (contact, searchText) => (
 contact.name.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
 contact.surname.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
 contact.phone.toString().search(searchText) !== -1
)

export default Contact;

