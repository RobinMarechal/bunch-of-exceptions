import UnimplementedException from '../src/exceptions/UnimplementedException';
import InvalidArgumentException from '../src/exceptions/InvalidArgumentException';

function throwUnimplementedException(){
    throw new UnimplementedException("exception");
}

function throwInvalidArgumentExceptionIfNotZero(param){
    if(param !== 0){
        throw new InvalidArgumentException("param != 0");
    }

    return 1;
}

describe('Exception tests', () => {
    test('should throw UnimplementedException', () => {
        try{
            throwUnimplementedException();
            expect(true).toBe(false);
        }catch(e){
            expect(e).toBeInstanceOf(UnimplementedException);
        }
    })

    test('should throw InvalidArgumentException if arg != 0', () => {
        try{
            throwInvalidArgumentExceptionIfNotZero(1);
            expect(true).toBe(false);
        }catch(e){
            expect(e).toBeInstanceOf(InvalidArgumentException);
        }

        try{
            let v = throwInvalidArgumentExceptionIfNotZero(0);
            expect(v).toBe(1);
        }catch(e){
            expect(true).toBe(false);
        }
    })
})