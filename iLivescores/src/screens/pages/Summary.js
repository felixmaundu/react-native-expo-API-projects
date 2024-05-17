import { Text, View } from "react-native";

const Summary = () => {
    return (
        <View>
            <Text>Summary</Text>
            <Text>Summary</Text>
            <Text>Summary</Text>
            {/* <EventsCard
                    title="Events"
                    // `https://v3.football.api-sports.io/fixtures/events?fixture=${id}`,
                    url={`fixtures/events?fixture=${props.route.params.matchId}`}
                /> */}
        </View>
    );
}

export default Summary;