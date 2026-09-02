import {renderHook, act} from '@testing-library/react';
import useLocalStorage from './useLocalStorage';

describe("useLocalStorage", () => {
    beforeEach(()=>localStorage.clear());

    test('should return initial value',()=>{
        const {result}=renderHook(()=>useLocalStorage('x','initial'));
        expect(result.current[0]).toBe('initial')}
    );
        
    test('should persist updates',()=>{
        const {result}=renderHook(()=>useLocalStorage('x','initial'));
        act(()=>result.current[1]('updated'));
        expect(localStorage.getItem('x')).toBe(JSON.stringify('updated'))}
    );
})

