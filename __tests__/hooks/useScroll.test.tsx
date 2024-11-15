import useScroll from "@/app/hooks/useScroll"
import { renderHook, act } from '@testing-library/react-hooks';


describe('useScroll', () => {
    it('should response to scroll events', () => {
        const { result } = renderHook(() => useScroll())

        act(() => {
            global.window.scrollY = 100
            global.dispatchEvent(new Event('scroll'))
        })
        expect(result.current).toBe(true)

        act(() => {
            global.window.scrollY = 0
            global.dispatchEvent(new Event('scroll'))
        })

        expect(result.current).toBe(false)
    })

})