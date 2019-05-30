const store = {
  user: [
    { id: 1, name: 'rahim' },
    { id: 2, name: 'chris' },
    { id: 3, name: 'shanan' }
  ],
  prescriptions: [
    { id: 1, name: 'Vicodin', user_id: 2 },
    { id: 2, name: 'Simvastatin', user_id: 2 },
    { id: 3, name: 'Lisinopril', user_id: 1 },
    { id: 4, name: 'Levothyroxine', user_id: 1 },
    { id: 5, name: 'Azithromycin', user_id: 1 },
    { id: 6, name: 'Metformin', user_id: 3 },
    { id: 7, name: 'Lipitor', user_id: 3 }
  ],
  schedules: [
    {
      id: 1,
      prescriptions_id: 7,
      days: ['Monday', 'Tuesday', 'Friday'],
      times: ['9:00am', '10:00am', '2:00pm']
    },
    {
      id: 2,
      prescriptions_id: 5,
      days: ['Monday', 'Tuesday', 'Friday'],
      times: ['9:00am', '10:00am', '2:00pm']
    },
    {
      id: 3,
      prescriptions_id: 7,
      days: ['Monday', 'Tuesday', 'Friday'],
      times: ['9:00am', '10:00am', '2:00pm']
    },
    {
      id: 4,
      prescriptions_id: 4,
      days: ['Monday', 'Tuesday', 'Friday'],
      times: ['9:00am', '10:00am', '2:00pm']
    }
  ]
};

export default store;
