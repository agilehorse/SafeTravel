import React, {useState} from "react";
import Header from "../reusable/Header";
import {useHistory} from "react-router-dom";
import {
    Button,
    Divider, FormControl,
    IconButton, Input, InputLabel,
    List,
    ListItem, ListItemSecondaryAction,
    ListItemText,
    MenuItem, Select,
    TextField,
    Typography
} from "@material-ui/core";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {makeStyles} from "@material-ui/core/styles";
import {Delete} from "@material-ui/icons";
import SearchInput from "../reusable/SearchInput";
import {PRAGUE_MAP_URL} from "../../utils/consts";
import clsx from "clsx";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const types = [
    'Pěšky',
    'Osobním automobilem',
    'Hromadnou dopravou'
];

export default function PathsCreation() {
    const classes = useStyles();
    const history = useHistory();

    const [places, setPlaces] = useState([]);
    const [map, setMap] = useState(PRAGUE_MAP_URL);
    const [type, setType] = useState(types[0]);

    const grottaPlace = () => {
      setPlaces([{
          id: "grotta",
          name: "Grotta Grébovka"
      }]);
      setMap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1153.997190050945!2d14.443608147669451!3d50.069807752159875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9480d4cbf7d9%3A0xcaa5dad1c386dd5f!2sGrotta!5e0!3m2!1scs!2scz!4v1610051307865!5m2!1scs!2scz");
    };

    const clearPlaces = () => {
        setPlaces([]);
        setMap(PRAGUE_MAP_URL);
    }

    return (
        <>
            <Header
                text="Vytvoř cestu"
                cancelAction={() => history.push('/paths')}
                confirmAction={() => history.push('/paths')}
            />
            <section className={classes.content}>
                <ValidatorForm autoComplete="off">
                    <TextField
                        variant="outlined"
                        label="Název"
                        fullWidth
                        name="name"
                        className={classes.textField}
                    />

                    <TextField
                        variant="outlined"
                        label="Popis"
                        fullWidth
                        name="description"
                        className={classes.textField}
                        multiline
                    />

                    <TextField
                        id="standard-number"
                        label="Doba cesty"
                        type="number"
                        variant="outlined"
                        placeholder="v minutách"
                        className={classes.textField}
                    />

                    <FormControl className={clsx(classes.textField, classes.select)}>
                        <InputLabel id="demo-mutiple-name-label">Typ dopravy</InputLabel>
                        <Select
                            labelId="demo-mutiple-name-label"
                            id="demo-mutiple-name"
                            input={<Input />}
                            MenuProps={MenuProps}
                            variant="outlined"
                            value={type}
                            onChange={(e)=>setType(e.target.value)}
                        >
                            {types.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </ValidatorForm>
                <Typography variant="h5">Označ cestu na mapě</Typography>
                <Typography variant="body1">Přidávej postupně místa a upravuj cestu mezi nimi.</Typography>
                <iframe
                    src={map}
                    frameBorder="0" className={classes.map} allowFullScreen="" aria-hidden="false"
                    tabIndex="0" />
                <SearchInput
                    icons={{
                        search: {},
                        explore: {
                            onClick: grottaPlace
                        }
                    }}
                    onEnter={grottaPlace}

                    placeholder="Najdi místo"
                />
                <List>
                    {
                        places.map(
                            (place, i) =>
                                <ListItem key={place.id}>
                                    <ListItemText
                                    >
                                        {i+1}. {place.name}
                                    </ListItemText>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <Delete onClick={clearPlaces} />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                        )
                    }
                </List>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Delete />}
                    onClick={clearPlaces}
                >
                    Smazat vše
                </Button>
            </section>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    content: {
      margin: theme.spacing(2)
    },
    map: {
        border: 0,
        width: "100%",
        height: 300
    },
    textField: {
        marginBottom: theme.spacing(2),
        width: "100%"
    },
    select: {
        width: "100%"
    }
}));