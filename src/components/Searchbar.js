import React, { Component } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

export default class Searchbar extends Component {


    static propTypes = {
        searchDeals : PropTypes.func.isRequired,
        initialSearchTerm : PropTypes.string.isRequired
    }
    
    state = {
        searchTerm : this.props.initialSearchTerm
    }

    searchDeals = (searchTerm) => {
        this.props.searchDeals(searchTerm);
        this.ip.blur;
    }
    debouncedSearchDeal = debounce(this.searchDeals, 300) 

    handleChange =  (searchTerm) => {
        this.setState({searchTerm}, () => {
            this.debouncedSearchDeal(this.state.searchTerm)
        })
    }
    render() {
        return (
            <TextInput 
            ref = {(ip) => {this.ip = ip}}
            value = {this.state.searchTerm}
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