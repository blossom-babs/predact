import { SchoolAdmin, Admin } from "../../models";
const store = new SchoolAdmin()

xdescribe('Test Admin Model', () => {
  let admin: Admin

  beforeEach(() => {
    admin = {
      staffId: '110-579-Hl',
      profilePhoto: '',
      firstName: 'debo',
      lastName: 'kiana',
      workLevel: 'level 17',
      department: 'sociology',
      dateEmployed: 'January 16 2005',
      assignment: 'Course advisor, sociology 200lvl',
      email: 'kiana@gmail.com',
      phoneNumber: '+234908776',
      education: 'Msc',
    }
  })

  it('saves admin info to db', async () => {
    const res = await store.saveSchoolAdmin(admin)
    expect(res.length).toBe(1)
    expect(res).toBeDefined
  })
})
