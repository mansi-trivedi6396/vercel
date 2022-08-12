import { IconButton, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import DrawerSelect from './Utils/DrawerSelect';
import DrawerTextField from './Utils/DrawerTextField';
import DrawerButton from './Utils/DrawerButton';
import DrawerRedButton from './Utils/DrawerRedButton';
import DrawerTextWithIcon from './Utils/DrawerTextWithIcon';
import AccordionCustom from '../../AccordionCustom';
import addClubIcon from "../../../../../images/booking_plus.svg"
import minClubIcon from "../../../../../images/booking_min.svg"
import line from "../../../../../images/lineBook.svg"
import BookingAccordianItem from './Utils/BookingAccordianItem';
import flag from '../../../../../images/flagIcon.svg'
import DrawerWithSelectFlag from './Utils/DrawerWithSelectFlag';
import EditCourtItem from './Utils/EditCourtItems';
import delete_icon from '../../../../../images/delete_black.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    titleRoot: {
        width: '97%',
        display: 'flex',
        marginTop: '40px',
        marginBottom: '30px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '15px',
    },
    rootForm: {
        width: '100%',
    },
    rootMainForm: {
        paddingLeft: '15px',
        paddingRight: '15px '
    },
    dateTime: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '10px',
    },
    rootButton: {
        display: 'flex', width: '97%', flexDirection: 'row', justifyContent: 'space-arround', alignItems: 'center', bottom: '0', position: 'absolute',
        marginBottom: '20px', overflowY: 'hidden'

    },
    subButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-betweeen',
        marginRight: '25px',
        width: '100%'
    },
    typoTitle: {
        fontFamily: 'DM Sans',
        fontSize: '30px',
        fontWeight: 400
    },
    rootPrice: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

}))

function EditCourt({ close }) {
    const DATA_COURT = [
        { label: "Court 1", value: 1 },
        { label: "Court 2", value: 2 },
        { label: "Court 3", value: 3 },
    ]

    const DATA_TIME = [
        { label: "11:00", value: 1 },
        { label: "11:00", value: 2 },
        { label: "11:00", value: 3 },
    ]

    const DATA_DATE = [
        { label: "14/7", value: 1 },
        { label: "14/7", value: 2 },
        { label: "14/7", value: 3 },
    ]


    const DATA_TIME_2 = [
        { label: "12:00", value: 1 },
        { label: "12:00", value: 2 },
        { label: "12:00", value: 3 },
    ]

    const DATA_PRICE = [
        { label: "SEK", value: 1, icon: flag },
        { label: "SEK", value: 2, icon: flag },
        { label: "SEK", value: 3, icon: flag },
    ];
    const classes = useStyles();

    const [formFields, setFormFields] = useState([])
    const [selected, setSelected] = useState("")
    const [plus, setPlus] = useState(false);

    const addFields = () => {
        setFormFields([...formFields, "dummy"])
        setPlus(true)
    }

    const removeFields = index => {
        let data = [...formFields]
        data.splice(index, 1)
        setFormFields(data)
        setPlus(false)
    }

    const handleClickPlus = () => {
        setPlus(true)
    }
    return (
        <div className={classes.root}>
            <div className={classes.titleRoot}>
                <Typography className={classes.typoTitle} style={{ margin: '13px' }}>Edit court</Typography>
                <IconButton onClick={close}>
                    <CloseIcon style={{ margin: '13px' }} />
                </IconButton>
            </div>
            <div className={classes.rootForm}>
                <div className={classes.rootMainForm}>
                    <div style={{ marginRight: '15px' }}>
                        <DrawerTextField placeHolder="Court name" label="Court name" />
                    </div>
                    <div className={classes.dateTime}>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '0px' }}>
                            <DrawerSelect align="center" placeHolder="Sports" label="Sports" />
                        </div>
                        <div style={{ display: 'flex', direction: 'column', width: '100%', marginLeft: '10px', marginRight: '10px', alignItems: 'center', justifyContent: 'space-between', }}>
                            <DrawerSelect placeHolder="Outside" label='Outside/inside' />

                        </div>
                    </div>
                    <div style={{ marginRight: '10px', width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ width: '46%', }}>
                            <DrawerSelect placeHolder="Customer name" label="Customer name" />
                        </div>
                        <div style={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
                            <div style={{ width: '55%', marginRight: '10px' }}>
                                <DrawerTextField placeHolder="Price" label="Price" />
                            </div>
                            <div style={{ width: '55%', marginRight: '10px' }}>
                                <DrawerWithSelectFlag data={DATA_PRICE} placeHolder="SEK" label="&nbsp;&nbsp;" />
                            </div>
                        </div>
                    </div>



                    <div className={classes.rootButton}>
                        <div style={{ width: '80%', padding: '20px' }}>
                            <DrawerButton text="Save" />
                        </div>
                        <div style={{ width: '20%' }}>
                            <img src={delete_icon} style={{ width: '60px' }} />
                        </div>

                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            float: "left",
                            marginLeft: "0px",
                            marginTop: '5px'

                        }}
                    >
                        {
                            plus === false ?
                                <img
                                    src={addClubIcon}
                                    onClick={addFields}
                                    alt="add"
                                    style={{ marginLeft: "10px" }}
                                /> :
                                <img
                                    src={minClubIcon}
                                    onClick={removeFields}
                                    alt="add"
                                    style={{ marginLeft: "10px" }} />

                        }
                        <Typography style={{ fontFamily: "DM Sans", fontSize: "15px", marginLeft: '20px' }}>
                            Advanced settings{" "}
                        </Typography>

                        <br />
                    </div>
                    <br />
                    <img
                        src={line}
                        style={{
                            width: 300,
                            marginTop: "10px",
                            marginBottom: "10px",
                            paddingLeft: "30px",
                        }}
                    />
                    <div>
                        {formFields.map(index => {
                            return (
                                <div key={index}>
                                    <EditCourtItem
                                        handleDeleteClick={() => removeFields(index)}
                                    />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default EditCourt