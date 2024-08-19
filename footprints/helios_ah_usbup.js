module.exports = {
    params: {
        designator: 'MCU',
        side: 'F',
        P31: {type: 'net', value: '10'},
        P1: {type: 'net', value: '0'},
        P2: {type: 'net', value: '1'},
        P3: {type: 'net', value: 'GND'},
        P4: {type: 'net', value: 'GND'},
        P5: {type: 'net', value: '2'},
        P6: {type: 'net', value: '3'},
        P7: {type: 'net', value: '4'},
        P8: {type: 'net', value: '5'},
        P9: {type: 'net', value: '6'},
        P10: {type: 'net', value: '7'},
        P11: {type: 'net', value: '8'},
        P12: {type: 'net', value: '9'},
        P34: {type: 'net', value: 'P25-RGB'},
        P25: {type: 'net', value: '12'},
		P26: {type: 'net', value: '13'},
		P27: {type: 'net', value: '14'},
		P28: {type: 'net', value: '15'},
		P29: {type: 'net', value: '16'},
		P24: {type: 'net', value: '21'},
		P23: {type: 'net', value: '23'},
		P22: {type: 'net', value: '20'},
		P21: {type: 'net', value: '22'},
		P20: {type: 'net', value: '26'},
		P19: {type: 'net', value: '27'},
		P18: {type: 'net', value: '28'},
		P17: {type: 'net', value: '29'},
		P16: {type: 'net', value: '3V3'},
		P15: {type: 'net', value: 'RST'},
		P14: {type: 'net', value: 'GND'},
		P13: {type: 'net', value: '5V'},
		P30: {type: 'net', value: '11'},
		P32: {type: 'net', value: 'D+'},
		P33: {type: 'net', value: 'D-'}
    },
    body: p => `
		(module helios_0xcb (layer F.Cu) (tedit 66c26981)
		${p.at /* parametric position */}
		
		${'' /* footprint reference */}
		(fp_text reference "${p.ref}" (at 0 0 ${p.rot}) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
		(fp_text value "Helios_AH_USBup" (at 0 0.635 unlocked) (layer "F.Fab")
			  (effects (font (size 1 1) (thickness 0.15)))
			(tstamp 65ca7dc6-5223-41cd-9bd6-2fa2f4f9d1aa)
		)
		(fp_text user "1" (at -6.02 -13.2825 ${p.rot}) (layer "F.SilkS")
			  (effects (font (size 1 1) (thickness 0.15)) (justify bottom))
			(tstamp 746d1fb1-c013-4881-b809-4eea2b61bb0c)
		)
		(fp_text user "USB" (at 0 -16.2 unlocked) (layer "F.SilkS")
			  (effects (font (size 1 1) (thickness 0.15)) (justify bottom))
			(tstamp 9e1272ad-1e12-4ad9-8856-18fb6b7808af)
		)
		(fp_text user "topside" (at 0 -14.8 unlocked) (layer "F.SilkS")
			  (effects (font (size 1 1) (thickness 0.15)) (justify bottom))
			(tstamp c6fac215-7ceb-4472-8afe-4f8c8cbd050a)
		)
		(fp_text user "USB" (at 0 -16.2 ${p.rot}) (layer "Cmts.User")
			  (effects (font (size 1 1) (thickness 0.15)) (justify bottom))
			(tstamp 777eed5f-6789-473b-a190-046f91dfa3ed)
		)
		(fp_line (start -9.09 -16.51) (end -9.09 13.97)
			(stroke (width 0.15) (type default)) (layer "F.SilkS"))
		(fp_line (start -7.62 15.44) (end 7.62 15.44)
			(stroke (width 0.15) (type default)) (layer "F.SilkS"))
		(fp_line (start -3.55 -14.2) (end -3.55 -17.98)
			(stroke (width 0.15) (type default)) (layer "F.SilkS"))
		(fp_line (start 3.55 -14.2) (end -3.55 -14.2)
			(stroke (width 0.15) (type default)) (layer "F.SilkS"))
		(fp_line (start 3.55 -14.2) (end 3.55 -17.98)
			(stroke (width 0.15) (type default)) (layer "F.SilkS"))
		(fp_line (start 7.62 -17.98) (end -7.62 -17.98)
			(stroke (width 0.15) (type default)) (layer "F.SilkS"))
		(fp_line (start 9.09 13.97) (end 9.09 -16.51)
			(stroke (width 0.15) (type default)) (layer "F.SilkS"))
		(fp_line (start -9.09 -16.51) (end -7.62 -17.98)
			(stroke (width 0.15) (type default)) (layer "F.SilkS"))
		(fp_line (start -7.62 15.44) (end -9.09 13.97)
			(stroke (width 0.15) (type default)) (layer "F.SilkS"))
		(fp_line (start 7.62 -17.98) (end 9.09 -16.51)
			(stroke (width 0.15) (type default)) (layer "F.SilkS"))
		(fp_line (start 9.09 13.97) (end 7.62 15.44)
			(stroke (width 0.15) (type default)) (layer "F.SilkS"))
		(fp_rect (start -4.449999 -18.629999) (end 4.450001 -11.979999)
			(stroke (width 0.15) (type default)) (fill none) (layer "Cmts.User"))
		(fp_rect (start 8.89 -17.78) (end -8.89 15.24)
			(stroke (width 0.2) (type solid)) (fill none) (layer "Cmts.User"))
		
		${'' /* begin pads */}
		(pad "1" thru_hole circle \(at -7.62 -13.97 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P1})
		(pad "2" thru_hole circle \(at -7.62 -11.43 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P2})
		(pad "3" thru_hole roundrect \(at -7.62 -8.89 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") (roundrect_rratio 0.25) ${p.P3})
		(pad "4" thru_hole roundrect \(at -7.62 -6.35 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") (roundrect_rratio 0.25) ${p.P4})
		(pad "5" thru_hole circle \(at -7.62 -3.81 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P5})
		(pad "6" thru_hole circle \(at -7.62 -1.27 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P6})
		(pad "7" thru_hole circle \(at -7.62 1.27 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P7})
		(pad "8" thru_hole circle \(at -7.62 3.81 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P8})
		(pad "9" thru_hole circle \(at -7.62 6.35 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P9})
		(pad "10" thru_hole circle \(at -7.62 8.89 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P10})
		(pad "11" thru_hole circle \(at -7.62 11.43 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P11})
		(pad "12" thru_hole circle \(at -7.62 13.97 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P12})
		(pad "13" thru_hole circle \(at 7.62 -13.97 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P13})
		(pad "14" thru_hole roundrect \(at 7.62 -11.43 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") (roundrect_rratio 0.25) ${p.P14})
		(pad "15" thru_hole circle \(at 7.62 -8.89 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P15})
		(pad "16" thru_hole circle \(at 7.62 -6.35 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P16})
		(pad "17" thru_hole circle \(at 7.62 -3.81 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P17})
		(pad "18" thru_hole circle \(at 7.62 -1.27 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P18})
		(pad "19" thru_hole circle \(at 7.62 1.27 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P19})
		(pad "20" thru_hole circle \(at 7.62 3.81 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P20})
		(pad "21" thru_hole circle \(at 7.62 6.35 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P21})
		(pad "22" thru_hole circle \(at 7.62 8.89 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P22})
		(pad "23" thru_hole circle \(at 7.62 11.43 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P23})
		(pad "24" thru_hole circle \(at 7.62 13.97 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P24})
		(pad "25" thru_hole circle \(at -5.08 13.97 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P25})
		(pad "26" thru_hole circle \(at -2.54 13.97 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P26})
		(pad "27" thru_hole circle \(at 0 13.97 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P27})
		(pad "28" thru_hole circle \(at 2.54 13.97 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P28})
		(pad "29" thru_hole circle \(at 5.08 13.97 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P29})
		(pad "30" thru_hole circle \(at 7.62 -16.51 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P30})
		(pad "31" thru_hole circle \(at -7.62 -16.51 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P31})
		(pad "32" thru_hole circle \(at -1.27 -8.89 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P32})
		(pad "33" thru_hole circle \(at 1.27 -8.89 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P33})
		(pad "34" thru_hole circle \(at -5.08 11.43 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.P34})
		)
	`
}