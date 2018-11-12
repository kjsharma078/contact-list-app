import React, {Component} from 'react'
import Table from 'material-ui/Table/Table'
import TableBody from 'material-ui/Table/TableBody'
import TableHeader from 'material-ui/Table/TableHeader'
import TableFooter from 'material-ui/Table/TableFooter'
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn'
import TableRow from 'material-ui/Table/TableRow'
import TableRowColumn from 'material-ui/Table/TableRowColumn'
import TextField from 'material-ui/TextField/TextField'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'

export default class MyTable extends Component {

  state = {
    selectedStudents: [],
    tableData: [
      { id: 0, name: 'John Smith' },
      { id: 1, name: 'Randal White' },
      { id: 2, name: 'Stephanie Sanders' },
      { id: 3, name: 'Steve Brown' },
      { id: 4, name: 'Joyce Whitten' },
      { id: 5, name: 'Samuel Roberts' },
      { id: 6, name: 'Adam Moore' }
    ]
  }

  // Methods
  _onStudentSelected = (selected) => {
    let selectedStudents = selected === 'all'// Select all elements
      ? [...this.state.tableData].map(({id}) => id)
      : selected

    console.log('selected', selected,
                '\nSelected students', selectedStudents)

    this.setState({selectedStudents})
  }

  _onClickDeleteStudent = () => {
    let tableData = this.state.tableData.filter(({id}) =>
      !this.state.selectedStudents.includes(id)
    )

    this.setState({tableData, selectedStudents: []}, () => {
      console.log('After delete', this.state.tableData,
                '\nthis.state.selectedStudents', this.state.selectedStudents)
    })
  }

  render () {
    console.debug('rendered selectedStudents', this.state.selectedStudents)
    const isSelected = id => {
      let result = this.state.selectedStudents.includes(id)
      console.log('id', id, 'result', result)
      return result
    }
    return (
      <Table fixedHeader multiSelectable enableSelectAll onRowSelection={this._onStudentSelected}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Password</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={false}>
          {this.state.tableData.map(({id, name}) => (
            <TableRow key={id} selected={isSelected(id)}>
              <TableRowColumn>
                <TextField value={name} hintText='Name' />
              </TableRowColumn>
              <TableRowColumn>
                <TextField hintText='Password' type='password' />
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter adjustForCheckbox>
          <TableRow>
            <TableRowColumn>
              <RaisedButton label='Delete' onTouchTap={this._onClickDeleteStudent}
                            disabled={!this.state.selectedStudents.length} />
            </TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
}