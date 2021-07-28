import React, { Component } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import debounce from 'lodash'

export default class Searchbar extends Component {


    static propTypes = {
        searchDeals : PropTypes.func.isRequired
    }
    
    state = {
        searchTerm : ''
    }

    debouncedSearchDeal = debounce(this.props.searchDeals, 300) 

    handleChange =  (searchTerm) => {
        this.setState({searchTerm}, () => {
            this.debouncedSearchDeal(this.state.searchTerm)
        })
    }
    render() {
        return (
            <TextInput 
            placeholder = "Search Deals..."
            style = {styles.input}
            onChangeText = {this.handleChange}
            />

        )
    }
}

const styles = StyleSheet.create({
    input : {
        padding : 5,
        fontSize : 18,
        marginHorizontal : 10
    }
})