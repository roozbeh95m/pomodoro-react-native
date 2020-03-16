import { StyleSheet } from 'react-native'; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(207,68,66,1)',
    alignItems: 'center',
    justifyContent: "space-around",
    flexDirection:"column"
  },
  timer: {
    fontSize: 50,
    borderRadius:10,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingLeft: 16,
    paddingRight: 13,
  
    borderColor:"white",
    fontFamily:"Vazir-Bold-FD",
    color:"white",
    marginTop:40
  },
  label: {
    fontSize: 40,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily:"Vazir-Bold-FD",
    color:"white"
  },
  smallLabel: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily:"Vazir-Bold-FD",
    color:"white"
  },
  labelContainer: {
    height: 60,        
    justifyContent: 'flex-start',
  },
  button: {
    marginHorizontal: 10,
    borderColor:"white",
    borderWidth:1,
    borderRadius:10,
    padding:10,
    marginBottom: 20,
    width:100,
  },
  menu: {
    marginLeft: 10,
    marginRight: 10,
    width: 90,
    height: 35,
    fontFamily:"Vazir-Medium-FD",
    color:"white"
  },
  menuContainer: {
    flexDirection: 'row-reverse', 
    alignItems: 'center',
    
  },
  infoBox: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 15,
    fontFamily: "Vazir-Medium-FD",
    color:"white"
  },
  image: {
    width: 50, 
    height: 50,
   

  }
});