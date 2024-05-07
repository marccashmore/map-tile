The coordinates data will be in the form of a bounded box - effectively 4 lines, the first two about Greenwich and the second two about the equator

$$D E0055000 $$E E0094000 $$F N0523000 $$G N0491000

$D - Coordinates - westernmost longitude (NR)
$E - Coordinates - easternmost longitude (NR)
$F - Coordinates - northernmost latitude (NR)
$G - Coordinates - southernmost latitude (NR)

So what we will need to do is 
1. convert these into just an x,y - can use the harvard code below i think to do this
2. add an actual bounded box to the map - again can use the harvard code below i think to do this
3. zoom the map to the right zoom 


info about coordinates
$g - Coordinates - southernmost latitude

Subfields $d, $e, $f, and $g individually identify the four coordinates of the item. Subfield $d represents the westernmost extent of the item; subfield $e, the easternmost extent; subfield $f, the northernmost extent; and subfield $g, the southernmost extent. The abbreviations for the hemispheres are: N = North, S = South, E = East, W = West.

Subfields $d, $e, $f, and $g always appear together. The coordinates may be recorded in the form hdddmmss (hemisphere-degrees-minutes-seconds), however, other forms are also allowed, such as decimal degrees. The subelements are each right justified and unused positions contain zeros.

Examples in degrees/minutes/seconds: hdddmmss (hemisphere-degrees-minutes-seconds):

034	1#$aa$b22000000$dW1800000$eE1800000$fN0840000$gS0700000
034	1#$aa$b253440$dE0790000$eE0860000$fN0200000$gN0120000
[The above two examples illustrate records for flat maps or flat maps in atlases.]
Example in decimal degrees: hddd.dddddd (hemisphere-degrees.decimal degrees):

034	1#$aa$dE079.533265$eE086.216635$fS012.583377$gS020.419532
Example in decimal degrees: +-ddd.dddddd (hemisphere[+/-]-degrees.decimal degrees) (“+” for N and E, “-“ for S and W; the plus sign is optional):

034	1#$aa$d+079.533265$e+086.216635$f-012.583377$g-020.419532
Example without the optional plus sign:

034	1#$aa$d079.533265$e086.216635$f-012.583377$g-020.419532
Example in decimal minutes: hdddmm.mmmm (hemisphere-degrees-minutes.decimal minutes):

034	1#$aa$dE07932.5332$eE08607.4478$fS01235.5421$gS02028.9704
Example in decimal seconds: hdddmmss.sss (hemisphere-degrees-minutes-seconds.decimal seconds):

034	1#$aa$dE0793235.575$eE0860727.350$fS0123536.895$gS0202858.125
If the coordinates are given in terms of a center point rather than outside limits, the longitude and latitude which form the central axis are recorded twice (in subfields $d and $e and in $f and $g, respectively).

034	1#$aa$b75000$dW0950500$eW0950500$fN0303000$gN0303000
034	1#$aa$dW119.697222$eW119.697222$fN034.420833$gN034.420833
034	1#$aa$d-119.697222$e-119.697222$f+034.420833$g+034.420833
034	1#$aa$dW11941.833333$eW11941.833333$fN03425.250000$gN03425.250000
034	0#$dW0735848$eW0735848$fN0404554$gN0404554
[Coordinates of Carnegie Hall, a concert venue depicted in an image.]




