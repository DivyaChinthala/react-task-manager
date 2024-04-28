import { Box, Text, Icon, Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navigation = () => {
    return (
        <Box
                boxShadow='md'
                bgColor="#7564b0"
                height="75px"
                width="100vw"
                p="4"
                display="flex" alignItems="center"
            >
                <Text fontSize='2xl' color={"white"}>Task Manager</Text>
                <Box ml="auto" display="flex" alignItems="center" gap="8">
                    <Icon as={IoMdNotificationsOutline} boxSize={6} color='white' />
                    <Menu isLazy>
                        <MenuButton>
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        </MenuButton>
                        <MenuList mb={"0"}>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem color={"red"}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
    )
}
export default Navigation