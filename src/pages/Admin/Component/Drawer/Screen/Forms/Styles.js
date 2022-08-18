import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({

    root: {
        backgroundColor: "transprent",
        width: "100%",
        borderRadius: "10px 10px 0px 0px",
        height: "100%",
        paddingTop: "10px",
        paddingLeft: "21px",
        fontFamily: "DM Sans",
      },
      titleText: {
        fontSize: "28px",
        marginBottom: "40px",
        fontWeight: "400",
        fontStyle: "normal",
      },
      boxRoot: {
        width: "100%",
      },
      profileStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#B7B7BF",
        fontSize: "20",
        margin: "10px",
      },
      logoStyle: {
        marginBottom: "10px",
      },
      flagSelect: {
        background: "white",
        border: "none",
        borderRadius: 10,
        position: "relative",
        display: "flex",
        padding: "12px",
      },
      flagRoot: {},
      DivSelect: {
        display: "flex",
      },
      DivSelect2: {
        display: "flex",
      },
      DivSelect3: {
        display: "flex",
      },
      selectIcon:{
        "&>div .css-b62m3t-container":{
            paddingRight:'56px !important',
            marginTop:'11px'
        }
      }
  
}));