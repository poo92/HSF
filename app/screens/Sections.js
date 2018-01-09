// section list screen
import React, { Component } from 'react';
import { TouchableHighlight, Text, View ,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageContainer } from '../components/containers/appPagesContainer';
import { SecctionTitlle } from '../components/titles/sectionTitle';
import { DashboardButton } from '../components/buttons/dashboardButton';
import * as GlobalStyles from '../config/GlobalStyles';


class Section extends Component{
      constructor(props){
        super(props);
        this.state = {
             sectionList1 : [],
             sectionList2 : [],
        };
    }


  static propTypes = {
    navigation: PropTypes.object,
  }

  handleButtonPress = (branchName, sectionName, productionlines) => {
    console.log(productionlines);
    this.props.navigation.navigate('ProductionLines', { branchName: branchName, sectionName : sectionName , productionlines: productionlines});

  }

  render() {
    return(
      <PageContainer>
        <SecctionTitlle titleText={ "Sections of " + this.props.navigation.state.params.branchName } />
       {this.setSectionLists()}
       <View style={GlobalStyles.gridView.container} >
             <View style={GlobalStyles.gridView.column} >
                   { this.state.sectionList1.map((section) => (
                  <DashboardButton key= {section.id} title={ section.name} onPress= { () => this.handleButtonPress(this.props.navigation.state.params.branchName, section.name, section.productionlines) }/>
                  ))}
           </View>
           <View style={GlobalStyles.gridView.column}>
                 { this.state.sectionList2.map((section) => (
                <DashboardButton key= {section.id} title={ section.name} onPress= { () => this.handleButtonPress(this.props.navigation.state.params.branchName, section.name, section.productionlines) }/>
                ))}
             </View>
       </View>
      </PageContainer>
    );
  }

  setSectionLists = () => {
        var sections = this.props.navigation.state.params.sections;
        var length = sections.length;
        if(length % 2 == 0){
             for(var i = 0; i < length; i+=2) {
                 this.state.sectionList1.push(sections[i]);
                 this.state.sectionList2.push(sections[i + 1]);
           }
     }else{
           for(var i = 0; i < length - 1; i+=2) {
                 this.state.sectionList1.push(sections[i]);
                 this.state.sectionList2.push(sections[i + 1]);
           }
           var lastbranch = sections[length - 1];
           this.state.sectionList1.push(lastbranch);
     }
 }

}

  // { this.props.navigation.state.params.sections.map((section) => (
  // <DashboardButton key= {section.id} title={ section.name} onPress= { () => this.handleButtonPress(this.props.navigation.state.params.branchName, section.name, section.productionlines) }/>
  // ))}


const mapStateToProps =  state  => ({
  isLoggedIn : state.auth.isLoggedIn,
});



export default connect(mapStateToProps)(Section);
