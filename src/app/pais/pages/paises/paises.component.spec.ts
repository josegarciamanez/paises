import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Country } from '../../interfaces/pais.interface';
import { PaisesComponent } from './paises.component';
import Swal from 'sweetalert2';

describe('PaisesComponent', () => {
  let component: PaisesComponent;
  let fixture: ComponentFixture<PaisesComponent>;
  let mockPais: Country = {
    name: {
      common: 'Spain',
      official: 'Kingdom of Spain',
      nativeName: {
        spa: {
          official: 'Reino de España',
          common: 'España',
        },
      },
    },
    tld: ['.es'],
    cca2: 'ES',
    ccn3: '724',
    cca3: 'ESP',
    cioc: 'ESP',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['4'],
    },
    capital: ['Madrid'],
    altSpellings: ['ES', 'Kingdom of Spain', 'Reino de España'],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'مملكة إسبانيا',
        common: 'إسبانيا',
      },
      ces: {
        official: 'Španělské království',
        common: 'Španělsko',
      },
      cym: {
        official: 'Kingdom of Spain',
        common: 'Spain',
      },
      deu: {
        official: 'Königreich Spanien',
        common: 'Spanien',
      },
      est: {
        official: 'Hispaania Kuningriik',
        common: 'Hispaania',
      },
      fin: {
        official: 'Espanjan kuningaskunta',
        common: 'Espanja',
      },
      fra: {
        official: "Royaume d'Espagne",
        common: 'Espagne',
      },
      hrv: {
        official: 'Kraljevina Španjolska',
        common: 'Španjolska',
      },
      hun: {
        official: 'Spanyol Királyság',
        common: 'Spanyolország',
      },
      ita: {
        official: 'Regno di Spagna',
        common: 'Spagna',
      },
      jpn: {
        official: 'スペイン王国',
        common: 'スペイン',
      },
      kor: {
        official: '에스파냐 왕국',
        common: '스페인',
      },
      nld: {
        official: 'Koninkrijk Spanje',
        common: 'Spanje',
      },
      per: {
        official: 'پادشاهی اسپانیا',
        common: 'اسپانیا',
      },
      pol: {
        official: 'Królestwo Hiszpanii ',
        common: 'Hiszpania',
      },
      por: {
        official: 'Reino de Espanha',
        common: 'Espanha',
      },
      rus: {
        official: 'Королевство Испания',
        common: 'Испания',
      },
      slk: {
        official: 'Španielske kráľovstvo',
        common: 'Španielsko',
      },
      spa: {
        official: 'Reino de España',
        common: 'España',
      },
      swe: {
        official: 'Konungariket Spanien',
        common: 'Spanien',
      },
      urd: {
        official: 'مملکتِ ہسپانیہ',
        common: 'ہسپانیہ',
      },
      zho: {
        official: '西班牙王国',
        common: '西班牙',
      },
    },
    latlng: [40.0, -4.0],
    landlocked: false,
    borders: ['AND', 'FRA', 'GIB', 'PRT', 'MAR'],
    area: 505992.0,
    demonyms: {
      eng: {
        f: 'Spanish',
        m: 'Spanish',
      },
      fra: {
        f: 'Espagnole',
        m: 'Espagnol',
      },
    },
    flag: '🇪🇸',
    maps: {
      googleMaps: 'https://goo.gl/maps/138JaXW8EZzRVitY9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1311341',
    },
    population: 47351567,
    gini: {
      '2018': 34.7,
    },
    fifa: 'ESP',
    car: {
      signs: ['E'],
      side: 'right',
    },
    timezones: ['UTC', 'UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/es.png',
      svg: 'https://flagcdn.com/es.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/es.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/es.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [40.4, -3.68],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PaisesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getLanguage() works correctly', () => {
    let spy = spyOn(component, 'getLanguage').and.callThrough();
    let language = { es: 'Spanish' };
    component.getLanguage(language);
    expect(spy).toHaveBeenCalledWith(language);
  });

  it('should getLanguage() return with no languages', () => {
    let spy = spyOn(component, 'getLanguage').and.callThrough();
    let language = undefined;
    component.getLanguage(language);
    expect(spy).toHaveBeenCalledWith(language);
  });

  it('should delete() works correctly', () => {
    let spy = spyOn(component, 'delete').and.callThrough();
    component.delete(mockPais);
    expect(spy).toHaveBeenCalled();
  });

  it('should showModalInfo() works correctly', () => {
    let spy = spyOn(component, 'showModalInfo').and.callThrough();
    component.showModalInfo(mockPais);
    expect(spy).toHaveBeenCalled();
  });

  it('should Swal woks correctly', () => {
    let spy = spyOn(Swal, 'fire').and.callThrough();
    expect(spy).toHaveBeenCalled();
  });
});
