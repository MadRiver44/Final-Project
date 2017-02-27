// THIS WAS A BEAST
import { connect } from 'react-redux';
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { TopBar, ExerciseModal, WorkoutList } from '../ui'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { fetchCurrentWorkout, addExerciseToCurrrentWorkout } from '../actions/actionCreators';
import { setExerciseModalVisibility } from '..actions/actions';

const mapStateToProps = (state) => ({
  user: state.user,
  currentWorkout: state.currentWorkout,
  activeTab: state.ui.activeTab,
  exerciseModal: state.ui.exerciseModal,
  excercises: state.exercises,
  categories: state.catagories
});

const mapActionsToProps = (dispatch) => ({
  fetchCurrentWorkout() {
    return dispatch(fetchCurrentWorkout());
  },
  setModalVisibility(visible) {
    return dispatch(setExerciseModalVisibility(visible));
  },
  addExercise(exercise) {
    return dispatch(addExerciseToCurrrentWorkout(exercise));
  }
});

const Container extends Component {
  static defaultprops ={
    user: {},
    currentWorkout: [],
    activeTab: 0,
    excercises: [],
    catagories: []
  }

  componentDidMount() {
    this.props.fetchCurrentWorkout();
  }

  render() {
    return(
      <View style={styles.container}>
        <LinearGradient
        colors={['#52EDC7', '#5AC8FB']}
        style={styles.container}
        >

        <TopBar style={styles.topbar}>
          <Text style={styles.topbarText}>
          Current Workout
          </Text>
        </TopBar>

          <View style={styles.currentWorkout}>
            <WorkoutList
            setModalVisibility={this.props.setModalVisibility}
            currentWorkout={this.props.currentWorkout}
            />
         </View>
        </LinearGradient>

        <ExerciseModal
          addExercise={this.props.addExercise}
          catagories={this.props.catagories}
          excercises={this.props,exercises}
          visible={this.props.exerciseModal}
          closeModal={() => this.props.setExerciseModalVisibility(false)}
          />
      </View>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    borderBottomWidth: 2
  },
  topbarText: {
    color: '#AB88E7',
    fontSize: 26
  },
  currentWorkout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export const CurrentWorkout = connect(mapStateToProps, mapActionsToProps)(Container);








