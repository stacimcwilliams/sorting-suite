# sorting-suite

Sorting Suite

Sorting algorithms are one of the common domains for studying Computer Science data structures and algorithms. They give us an opportunity to focus on algorithms of various complexity all solving a relatively simple problem.

In this project, you are challenged to implement three fundamental sorting algorithms. Your final submission should include at least these six files:

bubbleSort.js
bubbleSort-test.js
insertionSort.js
insertionSort-test.js
mergeSort.js
mergeSort-test.js
1. Bubble Sort

Big Picture

Bubble Sort is often one of the first algorithms of any kind that programmers attempt. There are very few steps which make it not too difficult to implement. But it takes many instructions to actually execute – so the performance is typically quite bad.

The Algorithm

You can see a graphical run of the algorithm here.

For a high level understanding check out the wikipedia article. Bubble sort works by comparing and possibly swapping two values in an array. Say we start with this array of numbers:

2 0 1 3 4 5
The algorithm would start with a variable previous pointing to the first element, 2 and current pointing to the second value 0. Then if current is less than previous the two values are swapped. The swap would take place in this case, because 0 is less than 2. After that single swap the sequence would be:

0 2 1 3 4 5
The algorithm would continue with previous advancing one spot to the right, to point at 2, and current advancing to point at 1. 1 is less than 2, so we swap them again to get:

0 1 2 3 4 5
Notice that the 2 moved forward two spaces. This is commonly called “bubbling up”. The number being “bubbled” will always be the largest number seen up to this point.

Now, previous advances to 2, and current advances to 3. 3 is not less than 2, so the focus advances without swapping. This repeats moving right one space at a time until reaching the end of the array, meaning the largest number in the array must be in the last position.

After the second bubbling, we know that the last two items must be the two largest items in the array, and they are sorted. After the third iteration, the last 3 items are sorted. Thus we repeat the process once for each element in the array, allowing us to know that the last n items are sorted, where n is the size of the array.

Richer Example

Let’s look at the sequence for a more out-of-order sequence:

Pre-Sequence Previous Current Swap? Post-Sequence
   4 2 0 3 1     4       2      Y   2 4 0 3 1
   2 4 0 3 1     4       0      Y   2 0 4 3 1
   2 0 4 3 1     4       3      Y   2 0 3 4 1
   2 0 3 4 1     4       1      Y   2 0 3 1 4
   2 0 3 1 4     2       0      Y   0 2 3 1 4
   0 2 3 1 4     2       3      N   0 2 3 1 4
   0 2 3 1 4     3       1      Y   0 2 1 3 4
   0 2 1 3 4     3       4      N   0 2 1 3 4
   0 2 1 3 4     0       2      N   0 2 1 3 4
   0 2 1 3 4     2       1      Y   0 1 2 3 4
   0 1 2 3 4     2       3      N   0 1 2 3 4
   0 1 2 3 4     3       4      N   0 1 2 3 4
   0 1 2 3 4     0       1      N   0 1 2 3 4
   0 1 2 3 4     1       2      N   0 1 2 3 4
   0 1 2 3 4     2       3      N   0 1 2 3 4
   0 1 2 3 4     3       4      N   0 1 2 3 4
   0 1 2 3 4     0       1      N   0 1 2 3 4
   0 1 2 3 4     1       2      N   0 1 2 3 4
   0 1 2 3 4     2       3      N   0 1 2 3 4
   0 1 2 3 4     3       4      N   0 1 2 3 4
Expectations

Implement a bubbleSort function which will make the following code snippet work:

bubbleSort(["d", "b", "a", "c"])
=> ["a", "b", "c", "d"]

2. Insertion Sort

Big Picture

Insertion sort is a next step up from Bubble Sort. Make sure that you’ve successfully implemented Bubble Sort before you dive into this section.

Insertion sort uses slightly more complex logic but the algorithm is generally much higher performing than Bubble.

The Algorithm

You can see a visualization of the algorithm here.

For a high level understanding check out the wikipedia article. Insertion sort works by adding items to a sorted array. Typically sorting is done in place inside the array which needs sorting. The first element in the array becomes the sorted array. We iterate through the set to be sorted, pulling one element at a time, then inserting it into its correct position in the sorted section of the array.

Let’s start with this array of numbers: [ 1, 0, 4, 3, 2 ]

Pass 1

A list with only one item is always sorted, so we start our sorted list with the first element in our array:

original array:     [ 1, 0, 4, 3, 2 ]

                    [ sorted | unsorted   ]
original array:     [ 1,     | 0, 4, 3, 2 ]
Pass 2

We pull the first unsorted element, the 0, and compare it to the last element of the sorted set, 1. Since 0 is less than 1, we swap it with the 1:

unsorted:      [0, 4, 3, 2]
to insert:     0

                [ sorted | unsorted   ]
before insert:  [ 1,     | 0, 4, 3, 2 ]

                [ sorted  | unsorted ]
after insert:   [ 0, 1,   | 4, 3, 2  ]

Pass 3

We pull the first unsorted element, the 4, and compare it to the last element of the sorted set, 1. Since 4 is greater than 1, we add the 4 to the end of the sorted array.

unsorted:      [4, 3, 2]
to insert:     4

                [ sorted | unsorted ]
before insert:  [ 0, 1,  | 4, 3, 2  ]

                [ sorted   | unsorted ]
after insert:   [ 0, 1, 4, | 3, 2     ]
Pass 4

We pull the first unsorted element, the 3, and compare it to the last element of the sorted set, 4. Since 3 is less than 4, we swap the 3 and 4. We then compare the 3 with the previous position of the sorted set, 1. Since 3 is greater than 1 we have the 3 in the correct position.

unsorted:      [3, 2]
to insert:     3

                [ sorted   | unsorted ]
before insert:  [ 0, 1, 4, | 3, 2     ]

                [ sorted      | unsorted ]
after insert:   [ 0, 1, 3, 4, | 2        ]
Pass 5

We pull the first unsorted element, the 2, and compare it to the last element of the sorted set, 4. Since 2 is less than 4 we swap the 2 and 4. We then compare the 2 with the previous position of the sorted set, 3. Since 2 is less than 3, we swap the 2 and 3. Then we look at the previous position of the sorted set, 1. Since 2 is greater than 1 we have the 2 in the correct position.

unsorted:      [2]
to insert:     2

                [ sorted      | unsorted ]
before insert:  [ 0, 1, 3, 4, | 2        ]

                [ sorted         | unsorted ]
after insert:   [ 0, 1, 2, 3, 4, |          ]
Since we have no more elements in the unsorted section of our array, we are done with the algorithm.

Challenge

Implement an insertionSort which will make the following code snippet work:

insertionSort(["d", "b", "a", "c"])
=> ["a", "b", "c", "d"]
3. Merge Sort

Merge sort is the most fascinating sorting algorithm of the three, IMO, because it uses a technique called recursion. Recursion was a total mind-trip for me when I learned it. Here is a video I made with the intent of introducing recursion in a much more gradual way: Recursion Introduction.

Theory

Sorting Algorithms Video

For a high level understanding check out the wikipedia article. For a sweet line dancing example, see this Merge sort can be thought of as splitting an array into two arrays and sorting the halves by also splitting them in half and sorting those halves by splitting them in half… and so on.

For a brief example let’s look at a simple array. The first step would be to split the array into smaller arrays

Split the arrays

original_array:  [2, 0, 1, 3]
first_split:     [2, 0]
remaining_split: [1, 3]
We then proceed to split one of those arrays further until we are left with just numbers to compare.

Split again

first_split: [2, 0]
first_num:   2
second_num:  0
We then compare those numbers and put them back into an array together. 1 and 0 will swap, creating a sorted split array.

Sort the doubly split array

sorted_first_split: [0, 2]
remaining_split:    [1, 3]
We do the same operation on the remaining split, but we it’s already sorted so there will be no change. We then merge these two sorted halves together to create a final sorted array. This is accomplished by comparing the each element in the first split to those in the remaining split.

Merge the split and sorted arrays

first_split_candidates:     0, 2
remaining_split_candidates: 1, 3
first_combination:          0, 1
second_combination:         0, 1, 2
third_combination:          0, 1, 2, 3
merged_array:               [0, 1, 2, 3]
Challenge

Implement a mergeSort function which will make the following code snippets work.

mergeSort(["d", "b", "a", "c"])
=> ["a", "b", "c", "d"]
Evaluation Rubric

1. Fundamental JavaScript & Style

4: Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There are zero instances where an instructor would recommend taking a different approach.
3: Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
2: Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
1: Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
0: Your client-side application does not function or the application does not make use of localStorage for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
2. Test-Driven Development

4: Application is broken into components which are well tested in both isolation and integration
3: Application is well tested but does not balance isolation and integration tests, using only the data necessary to test the functionality
2: Application makes some use of tests, but the coverage is insufficient
1: Application does not demonstrate strong use of TDD
3. Encapsulation / Breaking Logic into Components

4: Application is expertly divided into logical components each with a clear, single responsibility
3: Application effectively breaks logical components apart but breaks the principle of SRP
2: Application shows some effort to break logic into components, but the divisions are inconsistent or unclear
1: Application logic shows poor decomposition with too much logic mashed together
4. Functional Expectations

4: Application meets all requirements, and implements one extension properly.
3: Application meets all requirements as laid out per the specification.
2: Application runs, but does not work properly, or does not meet specifications.
1: Application does not run, crashes on start.
5. Code Sanitation

The output from ESLint shows…

4 - Zero complaints
3 - Five or fewer complaints
2 - Six to ten complaints
1 - More than ten complaints
