import { expect } from 'chai';
import supertest from 'supertest';
describe('Auth', ()=>{
    const request = supertest('paysis.herokuapp.com')
    // it('login positive', () =>{
    //     request.post('/auth').send({ login: 'adminius', password: 'supers3cret' }
    //     ).end((err,res)=>{
    //         expect(res.statusCode).to.eq(200)
    //         expect(res.body.token).to.eq("d640c951-f3fc-42b4-b73e-5914c5731a50")
    //     })
    //   })
describe('positive',()=>{
    it('checking status code', ()=>{
        request.post('/auth').send({ login: 'adminius', password: 'supers3cret'}
        ).end((err,res)=>{
            expect(res.statusCode).to.eq(200)
        })
    })
    it('checking message', ()=>{
        request.post('/auth').send({ login: 'adminius', password: 'supers3cret'}
        ).end((err,res)=>{
            expect(res.body.token).to.eq("d640c951-f3fc-42b4-b73e-5914c5731a50")
        })
    })
})
describe('negative',()=>{
    it('checking status code', ()=>{
        request.post('/auth').send({ login:'wrong', password: '111111'}
        ).end((err,res)=>{
            expect(res.statusCode).to.eq(404)
        })
    })
    it('checking message', ()=>{
        request.post('/auth').send({ login:'wrong', password: '111111'}
        ).end((err,res)=>{
            expect(res.body.message).to.eq("Wrong login or password.")
        })
    })
})
})