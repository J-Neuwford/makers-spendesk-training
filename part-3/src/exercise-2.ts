// // function parameter
// // (param: type)

// // type parameter
// function identity<T>(value: T): T {
//   return value;
// }

// const numberValue = 10;
// const stringValue = "Hello";
// const objectValue = { name: "Alice" };

// const numberIdentity = identity<number>(numberValue);
// const stringIdentity = identity<string>(stringValue);
// const objectIdentity = identity<object>(objectValue);

type LogEntry<T> = {
  timeStamp: Date;
  data: T;
  tags: string[];
};

const createLogEntry = <T>(data: T, tags: string[]): LogEntry<T> => {
  return {
    timeStamp: new Date(),
    data: data,
    tags: tags,
  };
};

console.log();

function displayEntry(log: LogEntry<string>): void {
  console.log(
    `entry time: ${log.timeStamp} \n entry: ${log.data} \n tags: ${log.tags}`
  );
}

const newEntry = createLogEntry("added an entry to the log", [
  "add",
  "new",
  "entry",
]);

console.log(newEntry);

displayEntry(newEntry);
