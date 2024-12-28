/**
 * the Intersection Observer API to detect when an element enters or leaves the viewport.
 * The hook uses the Intersection Observer API to detect when the element is in the viewport.
 * The ref is assigned to the element you want to observe.
 * isVisible state indicates whether the element is in the viewport.
 */

import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Runs the effect when the "options" change.
  useEffect(() => {
    // Creates a new Intersection Observer instance that observes changes to the target element's intersection with the viewport. The callback function updates isVisible based on whether the element is intersecting (visible) or not.
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );

    // Starts observing the element referenced by ref.
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Ensures the observer is detached when the component is unmounted or when the ref changes.
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  // Returns the ref to be assigned to the target element and the isVisible state that indicates if the element is in the viewport.
  return [ref, isVisible];
};

export default useIntersectionObserver;
