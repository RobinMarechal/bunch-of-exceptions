import ExceptionSet from '../src/libs/ExceptionSet';
import UnimplementedException from '../src/exceptions/UnimplementedException';
import InvalidArgumentException from '../src/exceptions/InvalidArgumentException';

function throwTwoUnimplementedExceptions(){
    throw new ExceptionSet(
        new UnimplementedException("1"),
        new UnimplementedException("2")
    );
}

function fail(){
    expect(true).toBe(false);
}

describe('Exception set tests', () => {
    test('should throw 2 UnimplementedException', () => {
        try{
            throwTwoUnimplementedExceptions()
            fail();
        }catch(set){
            expect(set).toBeInstanceOf(ExceptionSet);
            expect(set.size).toBe(2);
            expect(set.get(0)).toBeInstanceOf(UnimplementedException);
            expect(set.get(1)).toBeInstanceOf(UnimplementedException);
        }
    });

    test("ExceptionSet should be iterable", () => {
        const set = new ExceptionSet();

        expect(set.size).toBe(0);

        set.add(new UnimplementedException("1"));
        set.add(new UnimplementedException("2"));
        set.add(new UnimplementedException("3"));

        expect(set.size).toBe(3);
        for(const item of set){
            expect(item).toBeInstanceOf(UnimplementedException);
        }
    })
})