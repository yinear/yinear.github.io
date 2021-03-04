import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
// You can toggle visibility of devTools with ctrl + H
// and change their position with ctrl + Q
export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-shift-h" changePositionKey="ctrl-shift-q" defaultIsVisible={false}>
    <LogMonitor />
  </DockMonitor>
);