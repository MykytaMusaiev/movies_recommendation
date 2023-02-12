import {IconButton, Input} from "@mui/joy";
import ShareIcon from '@mui/icons-material/Share';
import {Box, Divider, styled} from "@mui/material";
import {Form, Field} from 'react-final-form'
import {FormattedMessage} from "react-intl";

const InputStyled = styled(Input)(({theme}) => ({
    position: "sticky",
    padding: "5px",
    margin: "5px",
    ml: 1, flex: 1,
}))

const SelectedMovieForm = ({onSubmit}) => {

    const validate = (values) => {
        const errors = {}
        if (!values.listName) {
            errors.listName = <FormattedMessage id="required"/>
        }
        return errors;
    }

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit}) =>
                <form onSubmit={handleSubmit}
                >
                    <Box
                        sx={{
                            position: "sticky", top: "auto",
                            p: '2px 4px', display: 'flex', alignItems: 'center'

                        }}>
                        <Field name="listName"
                               render={({input, meta}) => (
                                   <>
                                       <InputStyled
                                           size="lg"
                                           variant="outlined"
                                           placeholder="Put the list name"
                                           {...input}
                                       />
                                       {meta.error && meta.touched && <span>{meta.error}</span>}
                                   </>
                               )}
                        />

                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton type="submit" color="primary" sx={{ p: '10px' }} aria-label="directions">
                            <ShareIcon/>
                        </IconButton>
                    </Box>
                </form>
            }/>

    )
}

export default SelectedMovieForm