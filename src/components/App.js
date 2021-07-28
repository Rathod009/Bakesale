import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  ajax from '../ajax'
import DealDetail from './DealDetail';
import DealList from './DealList';
import Searchbar from './Searchbar';

export default class App extends Component {

    state = {
        deals : [],
        dealsFromSearch : [],
        curDealId : null
    };

    async componentDidMount()
    {
        const deals = await ajax.fetchInitialDeals();
        // console.log(deals)
        this.setState({deals});
    }


    searchDeals = async (searchTerm) => {
        let dealsFromSearch = []
        if(searchTerm)
            dealsFromSearch =  await ajax.fetchDealsSearch(searchTerm)
        this.setState({dealsFromSearch})
    }

    setCurDeal = (dealID) => {
        this.setState({
            curDealId :dealID
        })
    }

    unsetCurDeal = () => {
        this.setState({
            curDealId : null
        })
    }

    curDeal = () => {
        return this.state.deals.find(
            (deal) => deal.key === this.state.curDealId
        )
    }
    render() {

        if(this.state.curDealId)
        {
            return (
            <View style = {styles.main}>
                <DealDetail initialDealData = {this.curDeal()} onBack = {this.unsetCurDeal}/>
            </View>)
        }

        const dealsToDisplay = this.state.dealsFromSearch.length > 0 
                ? this.state.dealsFromSearch 
                : this.state.deals;


        if(dealsToDisplay.length > 0)
        {
            return (
                <View style = {styles.main}>
                    <Searchbar searchDeals = {this.searchDeals}/>
                    <DealList deals = {dealsToDisplay} onItemPress = {this.setCurDeal}/>
                </View>
                )
        }
        return (
            <View style = {[styles.container, styles.main]}>
                <Text style = {styles.header}>BakeSale</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor:'#fff'
    },
    main : {
        marginTop : 10
    },
    header : {
        fontSize : 40
    }
})