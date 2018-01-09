// production line list screen
import React, { Component } from 'react';
import { TouchableHighlight, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageContainer } from '../components/containers/appPagesContainer';
import { SecctionTitlle } from '../components/titles/sectionTitle';
import { DashboardButton } from '../components/buttons/dashboardButton';
import * as GlobalStyles from '../config/GlobalStyles';

import { getProductionLineDetails } from '../actions/dashboard.js';


class ProductionLines extends Component{
      constructor(props){
       super(props);
       this.state = {
            prodlineList1 : [],
            prodlineList2 : [],
       };
      }

  static propTypes = {
    navigation: PropTypes.object,
    factoryName: PropTypes.string,
    productionlineDetails:PropTypes.array,
  }

  handleButtonPress = (fid,bid,sid,pid,productionlineName) => {
    this.props.dispatch(getProductionLineDetails(fid,bid,sid,pid,productionlineName));

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.productionlineDetails){
      this.props.navigation.navigate('ViewProductionLine');
    }
}



  render() {
    return(
      <PageContainer>
        <SecctionTitlle titleText={ "Production Lines of " + this.props.navigation.state.params.sectionName } />
             {this.setProdlineLists()}
             <View style={GlobalStyles.gridView.container} >
                   <View style={GlobalStyles.gridView.column} >
                        { this.state.prodlineList1.map((productionLine) => (
                        <DashboardButton key= {productionLine.name} title={ productionLine.name}
                            onPress= { () => this.handleButtonPress(productionLine.fid,productionLine.bid,productionLine.sid,productionLine.pid,productionLine.name) }/>
                        ))}
                 </View>
                 <View style={GlobalStyles.gridView.column}>
                      { this.state.prodlineList2.map((productionLine) => (
                           <DashboardButton key= {productionLine.name} title={ productionLine.name}
                                 onPress= { () => this.handleButtonPress(productionLine.fid,productionLine.bid,productionLine.sid,productionLine.pid,productionLine.name) }/>
                  ))}
                   </View>
             </View>
      </PageContainer>
    );


  }

  // { this.props.navigation.state.params.productionlines.map((productionLine) => (
  // <DashboardButton key= {productionLine.name} title={ productionLine.name}
  //     onPress= { () => this.handleButtonPress(productionLine.fid,productionLine.bid,productionLine.sid,productionLine.pid,productionLine.name) }/>
  // ))}

  setProdlineLists = () => {
        var prodlines = this.props.navigation.state.params.productionlines;
        var length = prodlines.length;
        if(length % 2 == 0){
             for(var i = 0; i < length; i+=2) {
                 this.state.prodlineList1.push(prodlines[i]);
                 this.state.prodlineList2.push(prodlines[i + 1]);
           }
     }else{
           for(var i = 0; i < length - 1; i+=2) {
                 this.state.prodlineList1.push(prodlines[i]);
                 this.state.prodlineList2.push(prodlines[i + 1]);
           }
           var lastbranch = prodlines[length - 1];
           this.state.prodlineList1.push(lastbranch);
     }
 }


  }


const mapStateToProps =  state  => ({
  isLoggedIn : state.auth.isLoggedIn,
  factoryName: state.dashboard.factoryName,
  productionlineDetails : state.dashboard.productionlineDetails,

});


export default connect(mapStateToProps)(ProductionLines);
