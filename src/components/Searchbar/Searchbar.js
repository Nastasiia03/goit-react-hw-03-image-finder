import { Component } from 'react'
import { Form, Input } from "./Searchbar.styled";
import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
    state = {
        value: "",
}

    handleChange = ({ target: { value } }) => {
		this.setState({ value })
    }
    
    handleSubmit = (e) => {
		e.preventDefault()
		if (!this.state.value) {
			return console.log('Error')
		}
		this.props.onSearch(this.state.value)
		this.setState({ value: '' })
    }
    
    render() {
      return  <header >
        <Form onSubmit={this.handleSubmit}>
            <button type="submit">
                <AiOutlineSearch size='20' />
            </button>

            <Input
                type="text"
                autocomplete="off"
                  placeholder="Search images and photos"
                  value={this.state.value}
				onChange={this.handleChange}
            />
        </Form>
    </header>
    }
}