import React, { Component } from 'react'
import { View, Image, StyleSheet,Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { priceDisplay } from '../util';

export default class DealItem extends Component {

    static propTypes = {
        deal : PropTypes.array.isRequired,
        onPress : PropTypes.func.isRequired
    }

    handlePress = () =>{
        console.log("REACHED TILL")
        this.props.onPress(this.props.deal.key);
    }

    render() {
        const {deal} = this.props;
        return (
            <TouchableOpacity style = {styles.container} onPress = {this.handlePress}>
                <Image source = {{uri : deal.media[0]}}
                style = {styles.image}/>

                <View style = {styles.info}>
                    <Text style = {styles.title}>{deal.title}</Text>
                    <View style = {styles.footer}>
                        <Text style = {styles.cause}>{deal.cause.name}</Text>
                        <Text style = {styles.price}>{priceDisplay(deal.price)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    image : {
        width : '100%',
        height : 150,
    },
    container : {
        margin : 10,
        borderColor : '#7e7e7e',
        borderWidth : 0.6,
        borderTopWidth : 0
    },
    info : {
        padding : 10,
        backgroundColor : '#fff'
    },
    title : {
        fontSize : 18,
        fontWeight : 'bold',
        paddingVertical : 5,
    },
    footer : {
        flexDirection : 'row'
    }
    ,
    price : {
        textAlign : 'right',
        flex : 1
    },
    cause : {
        flex : 2,
        textAlign : 'left'
    }
})