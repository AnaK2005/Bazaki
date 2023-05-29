import {StyleSheet} from  'react-native'; 

const estilos = StyleSheet.create({

//pagina inicial

  contInicial: {
    flexDirection: 'column',
    justifyContent: 'center', 
    height: 700, 
  },
  contBtnEntrar:{
    justifyContent: 'center',
    alignItems: 'space-around', 
    alignSelf: 'center', 
    flexDirection: 'row',
    top: 40,
  },
    btnEntrar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 55,
    width: 300, 
    shadowOffset: {width: 5, height: 6},  
    shadowColor: '#000',  
    shadowOpacity: 0.3,  
  },
  textobtnEntrar: {
    color: '#fff',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 25,
  },
  imginicial: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 30,
  },


//pagina home


  containercard: {
    width: 220,
    height: 330,
    borderColor: '#000',
    borderWidth: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    top: 80,
    borderRadius: 11,
  },
  fotocard: {
    backgroundColor: '#BCBCBC',
    height: 180,
    width: 180,
    borderRadius: 11,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  legendacard: {
    backgroundColor: '#000',
    height: 100,
    width: 180,
    borderRadius: 11,
  },
  conttTextoLegCard: {
    alignSelf: 'flex-end',
    top: 70,
    right: 10,    
  },
  textoLegCard: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
 navbar: {
    height: 150, 
    flexDirection: 'row',
    justifyContent: 'left',
  },
  logoNav: {
    width: 170, 
    height: 120,
    left: 120, 
  },
  iconesNav: {
    top: 20, 
    left:20,
    alignItems: 'center',
  },
 iconelogin: {
    width: 82, 
    height: 80, 
  },


//pagina login


  btnVoltar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DBDBDB', 
    height: 50,
    width: 120,
    borderRadius: 20,
    top: 12, 
    left: 12,

  },
  textoBtnVoltar: {
    color: '#fff',
    fontFamily: 'AntonRegular',
    fontSize: 28,
  },
  fotoPgLogin: {
    height: 140.3,
    width: 138.45,
    alignSelf: 'center',
    top: 15, 
  },
  contBtnsLogin1:{
    justifyContent: 'center',
    alignItems: 'space-around', 
    alignSelf: 'center', 
    flexDirection: 'row',
    top: 40,
  },
    btnOpcoes: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 55,
    width: 170,
    borderRadius: 20,
  },
  textoBtnOpcoes: {
    color: '#fff',
    fontFamily: 'AntonRegular',
    fontSize: 25,
  },
  btnExcluir: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
    height: 55,
    width: 170,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 2,
  },
  textoBtnExcluir:{
    color: '#000',
    fontFamily: 'AntonRegular',
    fontSize: 25,
  },
contBtnsLogin2: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 70,
  },
  btnCont2:{
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
    height: 70,
    width: 350,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 2,
    marginTop: 20,
  },
  textoBtnCon2: {
    fontFamily: 'AntonRegular',
    fontSize: 30,
  },







  
});

export default estilos; 


