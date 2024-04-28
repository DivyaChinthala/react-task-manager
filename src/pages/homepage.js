import { Box } from "@chakra-ui/react";
import Navigation from "../components/navigation";
import ListFolders from "../components/listFolders";

const Homepage = () => {
    return (
        <Box height="100vh" width="100vw">
            <Navigation />
            <ListFolders />
        </Box>
    )
}
export default Homepage;