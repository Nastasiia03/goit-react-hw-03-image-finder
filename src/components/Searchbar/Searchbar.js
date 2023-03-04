import { Component } from 'react'
import { Form, Header, Input, SearchButton } from "./Searchbar.styled";
import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  state = {
      value: "",
    page: 1,
      images: []
}

    handleChange = ({ target: { value } }) => {
      this.setState({ value })
      
    }
    
    handleSubmit = (e) => {
		e.preventDefault()
		if (!this.state.value) {
			return console.log('Error')
		}
		this.props.onSearch(this.state.value, this.state.page)
      this.setState({ value: '', page: 1 })
      
    }
    
    render() {
      return  <Header >
        <Form onSubmit={this.handleSubmit}>
            <SearchButton type="submit">
                <AiOutlineSearch size='20' />
            </SearchButton>

            <Input
                type="text"
                autocomplete="off"
                  placeholder="Search images and photos"
                  value={this.state.value}
				onChange={this.handleChange}
            />
        </Form>
    </Header >
    }
}