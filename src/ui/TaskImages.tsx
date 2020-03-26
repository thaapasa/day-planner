import React from 'react';
import { Schedule, Task } from 'app/data/Schedule';
import { Image, StyleSheet, View } from 'react-native';
import { toMinutesInDay, dayMiddleMinutes } from 'app/data/Time';
import { pointOnCircle } from 'app/data/Coordinates';

export const TaskImages = ({
  size,
  iconSize,
  schedule,
}: {
  size: number;
  iconSize: number;
  schedule: Schedule;
}) => {
  return (
    <View style={{ width: size, height: size }}>
      {schedule.tasks.map(t => (
        <TaskImage task={t} key={t.id} size={size} iconSize={iconSize} />
      ))}
    </View>
  );
};
const TaskImage = ({
  task,
  size,
  iconSize,
}: {
  task: Task;
  size: number;
  iconSize: number;
}) => {
  if (!task.imageUrl || !size) {
    return null;
  }
  const t1 = toMinutesInDay(task.startTime);
  const t2 = toMinutesInDay(task.endTime);
  const t = (t2 - t1) / 2 + t1;
  const a = ((t - dayMiddleMinutes) * 180) / dayMiddleMinutes;
  const p = pointOnCircle(
    a,
    size / 2,
    size / 2 - iconSize / 2,
    size / 2 + iconSize / 2,
  );

  return (
    <Image
      source={{ uri: task.imageUrl }}
      resizeMode="contain"
      style={[
        styles.image,
        { top: size - p.y, left: p.x, width: iconSize, height: iconSize },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: { position: 'absolute' },
});
