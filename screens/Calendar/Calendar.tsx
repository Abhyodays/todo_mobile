import { FlatList, ScrollView, SectionList, Text, View } from "react-native"
import CommonStyles from "../styles";
import { useState } from "react";
import CalendarPicker from 'react-native-calendar-picker';
import { isDateEqual } from "../../utils/dateUtils";
import { useAppSelector } from "../../hooks/redux_hooks";
import styles from "./styles";
import { Task } from "../../types/Task";
import CalendarTaskCard from "../../components/CalendarTaskCard/CalendarTaskCard";

const Calendar = () => {
    const today: Date = new Date();
    const [selectedDate, setSelectedDate] = useState<Date>(today);
    const handleDateChange = (d: Date) => {
        setSelectedDate(d);
    }
    const uncompleteTasks: Task[] = [];
    const completedTasks: Task[] = [];
    const tasks = useAppSelector(state => state.todos);
    tasks.map(t => {
        if (t.date && isDateEqual(t.date, selectedDate.toJSON())) {
            if (t.isCompleted) {
                completedTasks.push(t);
            }
            else {
                uncompleteTasks.push(t);
            }
        }
    })


    return (
        <View style={CommonStyles.container}>
            <CalendarPicker onDateChange={handleDateChange}
                initialDate={today} />
            <SectionList
                sections={[
                    {
                        title: 'Tasks',
                        data: uncompleteTasks
                    },
                    {
                        title: 'Completed',
                        data: completedTasks
                    }
                ]}
                renderItem={({ item }) => <CalendarTaskCard task={item} />}
                renderSectionHeader={({ section: { title, data } }) => (
                    data.length > 0 ?
                        <Text style={styles.section_title}>{title}</Text>
                        : null
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Calendar;