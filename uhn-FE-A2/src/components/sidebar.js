import {Fab, Tooltip} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StopIcon from '@mui/icons-material/Stop';
import SegmentIcon from '@mui/icons-material/Segment';
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import TableViewIcon from '@mui/icons-material/TableView';

import { useRouter } from 'next/router'
export const SideBar = () => {
  const router = useRouter();



  return (
    <div className={'d-flex flex-column'}>
      <Tooltip title={'Save data'} className={'mt-4'}>
        <Fab onClick={() => {
          router.push('signup');
        }} size={'small'} color={'primary'}>
          <CloudUploadIcon />
        </Fab>
      </Tooltip>

      <Tooltip title={'Stop'} className={'mt-4'}>
        <Fab size={'small'} color={'error'}>
          <StopIcon />
        </Fab>
      </Tooltip>

      <Tooltip title={'History list'} className={'mt-4'}>
        <Fab size={'small'} color={'info'}>
          <SegmentIcon />
        </Fab>
      </Tooltip>

      <Tooltip title={'Record'} className={'mt-4'}>
        <Fab size={'small'} color={'warning'}>
          <EmergencyRecordingIcon />
        </Fab>
      </Tooltip>

      <Tooltip title={'Mute'} className={'mt-4'}>
        <Fab size={'small'} color={'inherit'}>
          <VolumeOffIcon />
        </Fab>
      </Tooltip>

      <Tooltip title={'Take photos'} className={'mt-4'}>
        <Fab size={'small'} color={'secondary'}>
          <CameraAltIcon />
        </Fab>
      </Tooltip>

      <Tooltip title={'Inquiry'} className={'mt-4'}>
        <Fab size={'small'} color={'success'}>
          <KeyboardVoiceIcon />
        </Fab>
      </Tooltip>

      <Tooltip title={'Table'} className={'mt-4'}>
        <Fab onClick={() => {
          router.push('/table');
        }} size={'small'} color={'info'}>
          <TableViewIcon />
        </Fab>
      </Tooltip>
    </div>
  )
}