import { Box, Button, Modal, Typography } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../App';
import './index.css'

const ModalCommon = () => {
    const context = useContext(ModalContext);
    const configs = context.modalConfigs;

    const [showState, setShowState] = useState(false)

    useEffect(() => {
        setShowState(context.isModalVisible)
    }, [context.isModalVisible]);

    const onHide = useCallback(() => context.closeModal(), []);

    if (!showState) {
        return;
    }

    return (
        <Modal
            open={showState}
            onClose={onHide}
        >
            <Box className="Modal-Box">
            {configs.closeButtonEnabled && 'CLOSE'}
            <Typography id="modal-modal-title" variant="h6" component="h2">
                { configs.title }
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                { configs.description }
            </Typography>
            {configs.children}
            </Box>
        </Modal>
    );
}

export default ModalCommon;