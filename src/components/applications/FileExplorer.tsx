import React from 'react';
import Window from '../os/Window';
import styled from 'styled-components';

export interface FileProps extends WindowAppProps {}

const FileExplorerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MenuBar = styled.div`
  background-color: #c0c0c0;
  padding: 1px;
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const MenuItem = styled.li`
  margin-right: 10px;
  cursor: pointer;
`;

const MenuSeparator = styled.hr`
  border: none;
  border-top: 1px solid #808080;
  margin: 2px 0; /* Reduced margin */
  padding: 0;
`;

const FileCabinetContent = styled.div`
  display: flex;
  flex-grow: 1;
  padding-right: 4px; /* Added padding to remove white space on the right */
`;

const Sidebar = styled.div`
  background-color: #c0c0c0; /* Windows 95 sidebar background color */
  border-right: 1px solid #808080;
  padding: 4px;
  width: 150px; /* Reduced width to match Windows 95 style */
`;

const FolderItem = styled.div`
  display: flex;
  flex-direction: column; /* Adjusted to display text below icon */
  align-items: center; /* Center align icon and text */
  margin-bottom: 2px; /* Increased margin */
`;

const FolderIcon = styled.span`
  font-size: 24px; /* Increased font size */
  margin-bottom: 4px; /* Adjusted margin */
`;

const FileCabinetView = styled.div`
  background-color: #fff;
  padding: 4px;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const FolderView = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  margin-bottom: 2px;
`;

const StatusBar = styled.div`
  background-color: #c0c0c0;
  border-top: 1px solid #808080;
  padding: 0px 0px;
  font-size: 12px;
`;

const FileExplorerApp: React.FC<FileProps> = (props) => {
  return (
    <Window
      top={20}
      left={20}
      width={500}
      height={400}
      windowBarIcon="computerSmall"
      windowTitle="File Cabinet"
      closeWindow={props.onClose}
      onInteract={props.onInteract}
      minimizeWindow={props.onMinimize}
    >
      <FileExplorerWrapper>
        <MenuBar>
          <Menu>
            <MenuItem>File</MenuItem>
            <MenuItem>Edit</MenuItem>
            <MenuItem>View</MenuItem>
            <MenuItem>Tools</MenuItem>
            <MenuItem>Folder</MenuItem>
            <MenuItem>Window</MenuItem>
            <MenuItem>Help</MenuItem>
          </Menu>
          {/* You can add more components or icons here */}
        </MenuBar>
        <MenuSeparator /> {/* Horizontal line below the menu bar */}
        <FileCabinetContent>
          <Sidebar>
            <FolderItem>
              <FolderIcon>&#128193;</FolderIcon> {/* Windows 95 folder icon */}
              <span>File Cabinet</span>
            </FolderItem>
          </Sidebar>
          <FileCabinetView>
            <FolderView>
              <FolderIcon>&#128193;</FolderIcon>
              <span>Memories</span>
            </FolderView>
            <FolderView>
              <FolderIcon>&#128193;</FolderIcon>
              <span>Pictures</span>
            </FolderView>
            <FolderView>
              <FolderIcon>&#128193;</FolderIcon>
              <span>Personal Files</span>
            </FolderView>
            <FolderView>
              <FolderIcon>&#128193;</FolderIcon>
              <span>Ujjwal</span>
            </FolderView>
          </FileCabinetView>
        </FileCabinetContent>
        <StatusBar>what is this behaviour Pranjali, you shouldn't look into somones personal files </StatusBar>
      </FileExplorerWrapper>
    </Window>
  );
};

export default FileExplorerApp;