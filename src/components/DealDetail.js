import React, { Component } from 'react'
import { View, Image, StyleSheet,Text, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import { priceDisplay } from '../util';
import ajax from '../ajax'

export default class DealDetail extends Component {

    static propTypes = {
        initialDealData : PropTypes.object.isRequired,
        onBack : PropTypes.func.isRequired
    }

    state = {
        deal : this.props.initialDealData
    }

    async componentDidMount () {
       const fullDeal =  await ajax.fetchDealDetail(this.state.deal.key);
       this.setState ({
           deal : fullDeal,
       })
    console.log("HERE " + fullDeal)
    }

    render() {

        const {deal} = this.state;
        return (
            <>
            <TouchableOpacity onPress = {this.props.onBack}>
                    <Text style = {styles.back}>Back</Text>
            </TouchableOpacity>
            <View style = {styles.container}>
                <Image source = {{uri : deal.media[0]}}
                style = {styles.image}/>

                <Text style = {styles.title}>{deal.title}</Text>
                <View style = {styles.info}>
                    <View style = {styles.footer}>
                        <View style = {styles.price_cause}>
                            <Text>{deal.cause.name}</Text>
                            <Text>{priceDisplay(deal.price)}</Text>
                        </View> 
                    {
                        deal.user && 
                        <View style = {styles.avatar_name}>
                            <Image source = {{uri : deal.user.avatar}} style = {styles.avatar}/>
                            <Text style = {styles.name}>{deal.user.name}</Text>
                        </View> 
                    }
                    </View>
                <View style = {styles.desc}>
                    <Text>{deal.description}</Text>
                </View>
                </View>
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    back : {
        marginBottom : 5,
        padding : 5
    },
    image : {
        width : '100%',
        height : 150,
    },
    container : {
        margin : 10,
        backgroundColor : '#fff',
        borderColor : '#1e1e1e',
        borderWidth : 1,
        borderTopWidth : 0
    },
    info : {
        padding : 10,
        // backgroundColor : '#fff'
    },
    title : {
        fontSize : 18,
        fontWeight : 'bold',
        paddingVertical : 8,
        paddingHorizontal:15,
        backgroundColor : '#eee'
    },
    footer : {
        flexDirection : 'row'
    }
    ,
    price_cause : {
        flex : 1,
        padding : 5,
        marginBottom : 5,
        alignItems : 'center',
        justifyContent : 'center'
    },
    avatar_name : {
        flex : 1, 
        padding : 5,
        marginBottom : 5,
        alignItems : 'center',
        justifyContent : 'center',
    },
    avatar : {
        width : 60,
        height : 60,
        borderRadius : 100
    },
    name : {
        fontSize : 12,
        fontWeight:'bold',
    },
    desc : {
        margin : 5,
        padding :5,
        borderColor : '#bbb',
        borderWidth : 0.5,
    }
})