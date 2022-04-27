import {StyleSheet} from 'react-native';
import colors from './colors.styles';

const general = StyleSheet.create({
  title: {
    color: colors.text.dark,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Kanit-Bold'
  },
  primaryDarkText: {
    fontFamily: 'Kanit-Medium',
    fontSize: 16,
    color: colors.text.dark
  },
  secondaryDarkText: {
    fontFamily: 'Kanit-Light',
    fontSize: 14,
    color: colors.text.dark
  },
  primaryLightText: {
    fontFamily: 'Kanit-Medium',
    fontSize: 16,
    color: colors.text.light
  },
  secondaryLightText: {
    fontFamily: 'Kanit-Light',
    fontSize: 14,
    opacity: 0.6,
    color: colors.text.light
  },
  textFieldContainer: {
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 0.4,
    borderColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textField: {
    color: colors.text.dark,
    fontFamily: 'Kanit-Medium',
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: colors.background,
  },
  columnContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colors.background,
    padding: 8
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6
  },
});

export default general;
