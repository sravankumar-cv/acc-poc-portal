/**
 * @fileoverview API tests for user register.
 */

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = require('chai').should(),
    app = require('../../testServer');

chai.use(chaiHttp);

describe('User register API tests - Basic tests', () => {
    it('Check if such API exist - API should not return a 404', (done)=> {
        chai.request(app)
            .post('/api/auth/register')
            .end((err, res)=> {
                chai.assert.notEqual(res.status, 404)
            done();
        })
    })
    it('Check if such API exist - API should return a 404', (done)=> {
        chai.request(app)
            .get('/api/auth/register')
            .end((err, res)=> {
                chai.assert.equal(res.status, 404);
            done();
        })
    })
})

describe('User validation unit test', ()=> {
    it('User should not able able to register without providing required fields', (done)=> {
        chai.request(app)
            .post('/api/auth/register')
            .set('Content-Type', 'application/json')
            .send({
                name: '',
                email: '',
                password: '',
                phone_number: ''
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
            done();
        })
    })

    it('User should not able able to register without providing a name field', (done)=> {
        chai.request(app)
            .post('/api/auth/register')
            .set('Content-Type', 'application/json')
            .send({
                name: '',
                email: 'jithin@gmail.com',
                password: 'Jithinww23323!',
                phone_number: '3234343434'
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                chai.assert.equal(res.text, '"Invalid parameters provided. Please provide valid parameters."')
            done();
        })
    })

    it('User should not able able to register without providing a valid name field', (done)=> {
        chai.request(app)
            .post('/api/auth/register')
            .set('Content-Type', 'application/json')
            .send({
                name: 'j',
                email: 'jithin@gmail.com',
                password: 'Jithinww23323!',
                phone_number: '3234343434'
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 400);
                // chai.assert.equal(res.text, '"Invalid parameters provided. Please provide valid parameters."');
            done();
        })
    })
})