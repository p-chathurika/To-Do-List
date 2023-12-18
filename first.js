import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, } from 'react-native';
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>To Do List {'\n'}</Text>
    
    <view style={styles.image}>
    <Image source={{
      width:100,
      height:100,
      marginBottom:30,
      Padding:50,
      alignItems:'center',
      uri:"https://w7.pngwing.com/pngs/670/265/png-transparent-checkmark-done-exam-list-pencil-todo-xomo-basics-icon-thumbnail.png"
    }}
    />  
    </view>

    

      <View style={styles.mainCover}>
            <View style={styles.image}>
              <Image source={{
                width:20,
                height:20,
                Padding:50,
                uri:"https://cdn-icons-png.flaticon.com/512/76/76829.png"
              }}
              />
            </View>

            <View style={styles.textPart}>
              <Text style={styles.input}> Task 01 </Text>
            </View>
   
            <View style={styles.circle}></View>
           
       </View>
   

      <View style={styles.mainCover}>
            <View style={styles.image}>
            <Image source={{
                width:20,
                height:20,
                borderRadius:20,
                borderRadius:20,
                flex:1,          
                uri:"https://cdn-icons-png.flaticon.com/512/76/76829.png"
              }}
              />
            </View>



            <View style={styles.textPart}>
              <Text style={styles.input}> Task 02 </Text>
            </View>
   
            <View style={styles.circle}></View>
           
       </View>


      <View style={styles.mainCover}>
            <View style={styles.image}>
            <Image source={{
                width:20,
                height:20,
                borderRadius:20,
                borderRadius:20,
                flex:1,              
          
                uri:"https://cdn-icons-png.flaticon.com/512/76/76829.png"
              }}
              />
            </View>

            <View style={styles.textPart}>
              <Text style={styles.input}> Task 03 </Text>
            </View>
   
            <View style={styles.circle}></View>
           
       </View>


      <View style={styles.mainCover}>
            <View style={styles.image}>
            <Image source={{
                width:20,
                height:20,
                borderRadius:20,
                borderRadius:20,
                flex:1,          
                uri:"https://cdn-icons-png.flaticon.com/512/76/76829.png"
              }}
              />
            </View>

            <View style={styles.textPart}>
              <Text style={styles.input}> Task 04 </Text>
            </View>
   
            <View style={styles.circle}></View>
           
       </View>
   
            < view style={styles.writeTaskWrapper}>
      
              <Text style={styles.input1}>Type Task Here</Text> 
              </view>

            <View style={styles.circles}>
              <Text style={styles.input2}> - </Text>
            </View>

            <View style={styles.circled}>
              <Text style={styles.input3}> + </Text>
            </View>

  </View>
  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:"70px"
  },

  header:{
    color:"white",
    fontSize:"30px",
    paddingBottom:"20px"
    

  },
  Image:{
    paddingBottom:"50PX",
    justifyContent:"center",
    alignItems:'center'
  },

  
   
  textPart: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 10,
   
  },

  input: {
    width: 'fit-content',
    marginLeft: 15,
    fontSize: 17,
    fontWeight: 500,
    color:"#fff",
    paddingLeft:40
    
  },

  circle: {
    marginLeft: 60,
    width: 14,
    height: 14,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 9,
    alignItems:'flex-end',
    marginRight:15,
    
  },
  

  square: {
    marginLeft: 10,
    width: 20,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 6,
    borderWidth:2,
    
  },

  mainCover: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: 'gray',
    padding: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },


  box: {
    fontSize: 20,
    fontWeight: 300,
    textAlign: 'center',
    marginBottom: 5,

  },


  index: {
    width: 'fit-content',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 300,
    color:"#fff",
    
  },



  input1:{
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor:'gray',
    borderRadius: 60,
    width: 250,
    borderColor:'black',
    borderWidth:1,
    color:"#fff"
    

  },

  

  writeTaskWrapper:{
    position:'absolute',
    bottom: 135,
    width: '150px',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingRight:"70px"

  },

  addText:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize:25,
    paddingRight:"8px",
  },

  circles:{

    marginLeft: '190px',
    width: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 50,
    bottom:-50,
    
    backgroundColor:"gray",
    display:"flex",
   
    
  },
  
  circled:{
    marginLeft:'100px',
    width:40,
    height:40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor:"gray",
    display:"flex",
    bottom:-10

  },

  input2:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize:25,
    
    
    
  },

  input3:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize:24,
      
      
    
  },
  

},

 
);