import * as React from 'react';
import * as PropTypes from "prop-types";
import {Typography, Modal, Paper, InputBase, Divider, IconButton, Alert, styled, Badge, Box} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import MovieIcon from '@mui/icons-material/Movie';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {ReactComponent as MoviesImage} from "../../assets/movies.svg"
import {
    EmailShareButton,
    EmailIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";
import { CONFIRM_TIMEOUT} from "../../const";
import {FormattedMessage} from "react-intl";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    boxShadow: 12,
    p: 4,
    flexDirection: "column",
    justifyContent: "center",
};

const StyledImage = styled(MoviesImage)(({theme}) => ({
    width: "60px",
    height: "70px",
    position: "absolute",
    top: "5px",
    right: "48px"
}))

const SocialBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "15px"
}))

const SocialButton = styled(Box)(({theme}) => ({
    margin: "0 10px"
}))

const ConfirmModal = ({open, url, title, onClose, moviesCount}) => {
    const [alertStatus, setAlertStatus] = React.useState(false);

    const onModalClose = () => {
        onClose()
        setAlertStatus(false)
    }

    const preview = () => {
        window.open(url, "_blank")
    }

    const copyUrl = () => {
        setAlertStatus(true)
        setTimeout(() =>setAlertStatus(false),CONFIRM_TIMEOUT)
    }

    return (
        <Modal
            open={open}
            onClose={onModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Paper sx={style}>

                <Box sx={{display: "flex"}}>
                    <Badge badgeContent={moviesCount} color="primary" sx={{marginRight: "30px"}}>
                        <MovieIcon color="action"/>
                    </Badge>
                    <Typography id="modal-modal-title" variant="h6" component="h6"
                                sx={{fontSize: 18, alignItems: "center"}}
                                color="text.secondary" gutterBottom>
                        {title}
                        <StyledImage/>
                    </Typography>
                </Box>

                <Paper
                    component="form"
                    sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", marginTop: 2}}
                >
                    <InputBase
                        sx={{ml: 1, flex: 1}}
                        placeholder="List URL"
                        inputProps={{'aria-label': 'list URL'}}
                        value={url}
                    />

                    <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>

                    <IconButton onClick={preview} type="button" sx={{p: '10px'}} aria-label="preview">
                        <VisibilityIcon/>
                    </IconButton>

                    <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>

                    <CopyToClipboard text={url}
                                     onCopy={copyUrl}>
                        <IconButton type="button" color="primary"
                                    sx={{p: '10px'}}
                                    aria-label="copy to clipboard"
                        >
                            <ContentCopyIcon/>
                        </IconButton>
                    </CopyToClipboard>
                </Paper>

                <SocialBox>
                    <Typography variant="h5" component="h6"> <FormattedMessage id="share"/> </Typography>
                    <SocialButton>
                        <EmailShareButton url={url} subject={title}>
                            <EmailIcon size={32}
                                       round={true}/>
                        </EmailShareButton>
                    </SocialButton>
                    <SocialButton>
                        <LinkedinShareButton url={url} title={title}
                                             summary={"List of movies ive liked to share"}>
                            <LinkedinIcon size={32}
                                          round={true}/>
                        </LinkedinShareButton>
                    </SocialButton>
                    <SocialButton>
                        <TelegramShareButton url={url} title={title}>
                            <TelegramIcon size={32}
                                          round={true}/>
                        </TelegramShareButton>
                    </SocialButton>
                    <SocialButton>
                        <TwitterShareButton url={url} title={title}>
                            <TwitterIcon size={32}
                                         round={true}/>
                        </TwitterShareButton>
                    </SocialButton>
                </SocialBox>

                {alertStatus ? (
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setAlertStatus(false);
                                }}
                                sx={{
                                    marginTop: "0px"
                                }}
                            >
                                <CloseIcon/>
                            </IconButton>
                        }
                        sx={{mb: 2}}
                    >
                        <FormattedMessage id="copied"/>
                    </Alert>
                ) : null}

            </Paper>
        </Modal>
    )
}

ConfirmModal.propTypes = {
    open: PropTypes.bool,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func,
}

export default ConfirmModal;

