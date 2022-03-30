import  { makeStyles } from '@material-ui/core/styles';

const useStyles =  makeStyles((theme)=>({
  container:{
    padding:theme.spacing(6,0,6)
  },
  cardGrid:{
      padding:"20px 0"
  },
  card:{
      height:'100%',
      display:'flex',
      flexDirection:'column'
  },
  cardMedia:{
      paddingTop:'52.25%'
  },
  cardContent:{
      flexGrow:1
  }
}));


export default useStyles;