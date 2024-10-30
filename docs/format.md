# Database Format

```prisma
model attendances {
  id Int @id @default(autoincrement())

  startDate          DateTime @db.Date
  withCountervailing Boolean?
  timeEntries        Json?
  breakDuration      Int?     @db.SmallInt
  employeeDocument   String

  @@unique([employeeDocument, startDate])
}
```

## Explanation:

- id (autoincrement): Unique identifier for the attendance.
- startDate: Date of the attendance, when (date) the employee started to work
- withCountervailing: Boolean value to indicate in the case of SUNDAY, if the employee will be compensated
- timeEntries: JSON in the following shape with military time

```json
timeEntries: [
  {
    "startTime": "08:00",
    "endTime": "13:00"
  }
]
```

- breakDuration: Duration of the break in minutes
- employeeDocument: "Cedula" or Venezuelan document
- Unique: means that it can only exist 1 Date per employeeDocument
